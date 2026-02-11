import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
);

const adjectives = ['Quick', 'Happy', 'Clever', 'Brave', 'Swift', 'Bright', 'Cool', 'Wild', 'Bold', 'Sharp', 'Wise', 'Lucky', 'Epic', 'Great', 'Super'];
const nouns = ['Tiger', 'Eagle', 'Wolf', 'Bear', 'Fox', 'Hawk', 'Lion', 'Panda', 'Dragon', 'Phoenix', 'Shark', 'Falcon', 'Raven', 'Cobra', 'Viper'];

function generateUsername(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 99) + 1;
  return `${adj}${noun}${num}`;
}

// Generate realistic score (max 1250: 5 albums x 200 + 250 bonus)
function generateScore(): number {
  const completedAll = Math.random() > 0.3; // 70% complete all albums
  
  if (!completedAll) {
    // Partial completion (1-4 albums)
    const albumsCompleted = Math.floor(Math.random() * 4) + 1;
    const scores = [50, 120, 200];
    let total = 0;
    for (let i = 0; i < albumsCompleted; i++) {
      total += scores[Math.floor(Math.random() * scores.length)];
    }
    return total;
  }
  
  // Full completion with bonus
  const albumScores = Array(5).fill(0).map(() => {
    const rand = Math.random();
    if (rand < 0.25) return 200; // 25% perfect
    if (rand < 0.60) return 120; // 35% good
    return 50; // 40% okay
  });
  
  return albumScores.reduce((a, b) => a + b, 0) + 250;
}

async function generateTestData() {
  console.log('Starting test data generation...\n');
  
  const numUsers = 50;
  const numDays = 14;
  
  const dates: string[] = [];
  for (let i = 13; i >= 0; i--) {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  
  console.log(`Generating data for ${numUsers} users across ${numDays} days...\n`);
  
  const users: { id: string; username: string }[] = [];
  
  for (let i = 0; i < numUsers; i++) {
    const userId = crypto.randomUUID();
    const username = generateUsername();
    
    const { error } = await supabase
      .from('profiles')
      .insert({
        id: userId,
        username,
        email: `${username.toLowerCase()}@test.com`,
      });
    
    if (error) {
      console.error(`Error creating user ${username}:`, error);
      continue;
    }
    
    users.push({ id: userId, username });
  }
  
  console.log(`✓ Created ${users.length} users\n`);
  
  let totalPlays = 0;
  
  for (const user of users) {
    const daysPlayed = Math.floor(Math.random() * 8) + 3;
    const userDates = [...dates].sort(() => Math.random() - 0.5).slice(0, daysPlayed);
    
    for (const date of userDates) {
      const score = generateScore();
      
      const { error } = await supabase
        .from('plays')
        .insert({
          user_id: user.id,
          date,
          total_score: score,
        });
      
      if (error) {
        console.error(`Error creating play for ${user.username} on ${date}:`, error);
        continue;
      }
      
      totalPlays++;
    }
    
    console.log(`✓ ${user.username}: ${userDates.length} days played`);
  }
  
  console.log(`\n✓ Generated ${totalPlays} plays across ${numDays} days`);
  console.log('\nTest data generation complete!');
}

generateTestData().catch(console.error);