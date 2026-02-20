-- Cover Up - Album Data Import (Retry Run)
-- Generated: 2026-02-12T01:13:04.857Z
-- Source: failed_albums.csv

-- Insert albums (using MusicBrainz data)

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9584e28b-66a7-3846-8d52-b3008a283539', 'The Who', 'Who''s Next', 1971, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/a6545e7f-991e-3d1b-8ada-e2182adcbc8a/2013004401-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6b47c9a0-b9e1-3df9-a5e8-50a6ce0dbdbd', 'Queen', 'A Night at the Opera', 1975, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/90d2e40a-eee0-4290-aa0a-a5ae3683ea2f/2812830852-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9c1b8072-eb1d-33d2-af8c-984d46e40902', 'Bob Dylan', 'Blood on the Tracks', 1975, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/ee7f79c0-f52b-45e5-800e-daa8e1d69144/2113878756-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6c9ae3dd-32ad-472c-96be-69d0a3536261', 'David Bowie', 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars', 1972, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/bb7f0f5a-586e-3f90-8665-fdc547aa2a54/1239299887-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '744c7a1b-ac79-35c4-bd92-7e2c6a24c8d8', 'U2', 'Achtung Baby', 1991, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/bde8784b-ae7e-4553-9dda-1c4a19d3a56f/16544589722-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd85b9684-4277-3565-b89b-115c8b4b7fd3', 'The White Stripes', 'Elephant', 2003, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/9bf86596-1ef0-4bd4-8f5e-bb205a77b075/4817243161-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '642b183a-3e59-3cb9-9187-aeeefa0d8818', 'Guns N'' Roses', 'Use Your Illusion I', 1991, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/4cf70429-bdda-3842-9af9-54596620195d/2107697875-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f07346e6-c889-33b8-83c8-ad987d7b14f6', 'Bon Jovi', 'Slippery When Wet', 1986, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/260849ba-38e8-4ad5-bf8a-bff47eb91f93/9382444781-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1305859b-8937-397f-9c33-39f62eb672fb', 'Rage Against the Machine', 'Rage Against the Machine', 1992, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/389a60bf-e586-4dc3-b995-fe196c5cf0f7/33270800624-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cbffb669-c390-3a4d-b46f-1be8ea934b03', 'Queens of the Stone Age', 'Songs for the Deaf', 2002, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/989e8e77-6263-45e6-a8e5-8228fed65532/28387489485-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '28298e2c-4d70-3eed-a0f5-a3280c662b3d', 'Nas', 'Illmatic', 1994, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/f00af81c-9249-49d0-b3f5-8b6725bd1900/28008351580-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ad444843-7160-33d7-b0c9-fc99f2c14a99', 'Dr. Dre', 'The Chronic', 1992, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/0001a90e-252d-3af0-8e1c-173c1c4835c3/38739120180-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '610fb60f-900a-3c42-ac7d-f6b6aa8035f9', 'Wu-Tang Clan', 'Enter the Wu-Tang (36 Chambers)', 1993, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/2a059e43-e66c-4d6d-9a4f-dea9a6919061/10112836421-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5afcfeac-118a-35e6-af0d-35ec9003354d', 'The Notorious B.I.G.', 'Ready to Die', 1994, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/ed2eb0db-4ef9-3658-a613-582dd359348e/43805669742-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '499c19c8-0dab-4824-884b-6191d145e95b', 'Kendrick Lamar', 'Good Kid M.A.A.D City', 2012, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/d5bcadc9-d6b2-4119-bf50-af1b9dca834c/22057643526-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '11ae8c9c-27c1-3308-9761-edb87c8f54ea', 'Jay-Z', 'The Blueprint', 2001, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/51fe12d2-4adb-4e83-9dee-f33f7907bc48/39652140374-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b0fa91c8-0996-38f1-ab84-797f58d7c4eb', 'Eminem', 'The Marshall Mathers LP', 2000, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/e13db7c6-7291-45bc-9ce9-3a4f9c9b5f55/37454953221-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e2621417-9236-36b4-9f9e-376c416dc4b0', '2Pac', 'All Eyez on Me', 1996, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/ecb3560e-c8e1-4936-afae-b456b45f331c/42235530841-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c3733436-fcba-3c08-b082-d548df5c5139', 'A Tribe Called Quest', 'The Low End Theory', 1991, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/69959f4a-29fd-4867-83ec-bfb4036b30d1/1672879787-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a7f852ba-08bc-36f1-92f3-4dc127f4b70a', 'Jay-Z', 'Reasonable Doubt', 1996, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/37c0a6b5-f723-4e70-92b8-805a569bc436/28645054139-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ab570ccb-b06b-3746-8147-4903163ba895', 'Madvillain', 'Madvillainy', 2002, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/b88edf3d-7a88-4d1e-b51b-50022fde5708/28231687719-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8a01217e-6947-3927-a39b-6691104694f1', 'Kanye West', 'The College Dropout', 2004, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/99a96bf6-8166-3b7c-97ed-ea525f13ec65/34245157344-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '649762c9-8785-3d9c-803d-2f0496f168e5', 'Snoop Doggy Dogg', 'Doggystyle', 1993, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/d7a96c61-531f-4d2f-9873-4acaf3ba4ce0/10324697204-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '132d78be-baa5-3301-aba5-933409e3f848', 'The Notorious B.I.G.', 'Life After Death', 1997, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/03aa0355-70d2-4032-9985-f9a040978520/3409750467-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e9585ed4-d148-3711-bbee-55a97b58325a', 'Eminem', 'The Eminem Show', 2002, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/042e3733-608b-44f8-8976-a5a7fd537d2b/33907879386-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f624ead2-e4ba-4e52-bea5-4362b1c67b14', '50 Cent', 'Get Rich or Die Tryin''', 2003, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/8a41278f-09ec-4508-8609-0454be1f0473/36228538618-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b88655ba-7469-48b8-a296-b9011ab73ef3', 'Kendrick Lamar', 'DAMN.', 2017, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/f5eddaa6-3a79-47d5-ab80-f2e1d8f6bfd8/16595865340-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd44c50ad-61fd-3fce-95fc-27024d7f1d30', 'Kanye West', 'Graduation', 2007, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/08e0cab1-e95c-4b33-8ed3-1337d934fb7f/24202595971-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '03f3c216-bd40-322b-ac8a-254816ff5573', 'Mobb Deep', 'The Infamous', 1995, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/fc6ef0f1-5dc9-4b30-bdad-22cb9db92220/20158533713-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1c1b50ec-828b-3d7c-9b1b-54cb1fe97d55', 'Kanye West', '808s & Heartbreak', 2008, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/484307c9-a903-42f0-b08e-0db902930d99/36122991660-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cb688885-74b2-4e9b-a18c-6102866151f2', 'Lil Wayne', 'Tha Carter III', 2008, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/314f763c-f347-4fc3-a91f-e52a1884510c/11836049975-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '77befaa0-662e-3d84-ba45-c862e16dc109', 'Jay-Z', 'The Black Album', 2003, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/2144dd2c-fe35-4dff-8afa-38213e73a5e9/42298360769-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'eec6f4a7-b992-34df-8984-af0fe00550e0', 'Run-D.M.C.', 'Run-D.M.C.', 1984, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/db021c6b-b4f1-43c3-9d70-707bc2730928/43953787497-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2e904c43-e060-3a4c-aa6d-7e4cd8f7cde8', 'Ice Cube', 'The Predator', 1992, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/c9950c2d-0f35-48cc-8a59-afa7933d0ddf/10031621370-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ab981b48-9a7b-34c4-b46a-f6266317ce7c', 'Raekwon', 'Only Built 4 Cuban Linx', 1995, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/876f4c16-f0e1-40db-8586-87884d49b70d/9706279036-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5782e30e-fd08-349d-8a22-bbe8c5d7ffec', 'Makaveli', 'The Don Killuminati The 7 Day Theory', 1996, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/9a2fda84-4b4f-4721-b77e-6a9d5e6814bd/2733387924-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fa64febd-61e0-346e-aaa2-04564ed4f0a3', 'OutKast', 'Speakerboxxx/The Love Below', 2003, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/50c273d5-2f92-340a-adc2-178d5adaab63/4765243287-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c0704c7d-dc5b-43cd-b372-8056a3bf7bb2', 'Travis Scott', 'Astroworld', 2018, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/82784744-65ed-4f32-b004-ba45cd726509/22387554802-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1b4bb003-db4c-4858-84ec-817aaca09501', 'Kid Cudi', 'Man on the Moon The End of Day', 2009, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/cc2bc8f1-f54a-42d0-893f-90244c3b1a9d/31285907051-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a96597aa-93b4-4e14-9e6e-03892ab24979', 'Jay-Z & Kanye West', 'Watch the Throne', 2011, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/196bb188-d579-4f00-ac29-9a83a7dc1b9c/24086090433-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e54744e2-7646-304d-abb8-2952671da3bb', 'Ghostface Killah', 'Supreme Clientele', 2000, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/55c57300-5bc4-4dec-85a3-7d8698c9bc90/955219996-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3d19dd5c-9a0e-35c4-aeb8-c64ea898f1b6', 'Lupe Fiasco', 'Food & Liquor', 2006, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/f20f0f19-a410-4a30-9e61-b20eb933700d/2433341428-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8e8a594f-2175-38c7-a871-abb68ec363e7', 'Miles Davis', 'Kind of Blue', 1959, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/e7ba3cb7-a074-45ee-870f-3baeb6d3e8bf/12708426541-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '035a7881-3e2c-39d2-b110-fe26a4de94e5', 'Dave Brubeck Quartet', 'Time Out', 1959, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/12aa8a07-6bb7-4b8d-9857-50fa9f2e7c13/29462664186-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '322f18bb-5491-38e9-9044-c0a468651eec', 'Herbie Hancock', 'Head Hunters', 1973, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/52dda2f2-d7ee-4ec5-b00e-b1f4f86ebb95/36789594055-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '48ec720b-2fc2-35dd-8130-5b186c4abcbc', 'Charles Mingus', 'Mingus Ah Um', 1959, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/f9754b8f-15ae-45bf-9cc4-603e925fee04/1241372363-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5879cfca-e1d0-3ef4-8014-3b284832ed18', 'Ornette Coleman', 'The Shape of Jazz to Come', 1959, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/c4a1b794-7bb5-411a-a876-7af045cf6f22/12407949899-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2cdca11d-3e45-3152-93e5-4d2a4ddb1bc6', 'John Coltrane', 'Giant Steps', 1960, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/aeeb97ce-e509-4afd-87b9-9538bb252e10/1304628409-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c5e5e8ad-dc89-319e-8b2d-b3ff5e59fcea', 'Herbie Hancock', 'Maiden Voyage', 1965, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/8b3ca77d-647d-4e3e-b3a9-e7d5dd17f3e0/6311490042-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '516d4629-7bf3-3ac3-907a-ed9a022db840', 'Keith Jarrett', 'The Köln Concert', 1975, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/733b8ed9-a393-46b8-9309-69564e96e7e6/18565713920-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'eae0c18f-f2fd-3b97-8631-3f682a2f3957', 'Wayne Shorter', 'Speak No Evil', 1965, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/2e2833d1-a6b0-48a4-aba0-4d5fc1a0c436/1042413435-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1ae98569-1603-3f38-8bc3-158d9430ff78', 'Stan Getz & João Gilberto', 'Getz/Gilberto', 1966, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/e4c34a74-0e38-4685-9447-1cae00f27aba/24589143604-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '07eb42bc-78e5-4ee7-b7ec-62904a66ca8a', 'Cannonball Adderley', 'Somethin'' Else', 2010, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/6f75e9e8-694a-4462-80c6-b5699ff18e9c/7011469018-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '79a8fca9-2678-3c9c-a18f-b6f715d2375d', 'Bill Evans', 'Sunday at the Village Vanguard', 1961, '["Jazz"]'::jsonb, 'https://coverartarchive.org/release/06bf4534-e253-4edb-9727-ec76cb94929a/43868911590-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f8bae2e8-0ada-42f4-afcc-dccab0539033', 'Art Blakey & The Jazz Messengers', 'Moanin''', 2001, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/5cdd4153-da7f-4ce7-8ec0-7c7f2f730d9b/34478017470-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7d0a9612-7636-34fe-84d9-445c8df9c0f3', 'Miles Davis', 'In a Silent Way', 1969, '["Jazz"]'::jsonb, 'https://coverartarchive.org/release/47873c43-4337-4d3b-9bf2-959f85a7cec1/23109799066-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bc6c2573-bc7d-346a-8880-0e34b8fb7e50', 'Eric Dolphy', 'Out to Lunch!', 1964, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/a1d0a17b-0d3d-4d34-bd02-ea48cada4fe4/2307943932-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '903d5fe8-ab43-33b2-9411-6738af50de19', 'Miles Davis', 'Birth of the Cool', 1957, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/9f97004b-25e9-4cd9-8aca-a87cb199fe43/19126231822-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '48070ee2-1865-3b11-ba36-360b1453a37a', 'Charles Mingus', 'The Black Saint and the Sinner Lady', 1963, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/0d9f09ba-9e32-3d63-822a-a67935dc05d4/8878785226-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cf29d6a2-a18a-3bb6-a861-495148baee1f', 'Sonny Rollins', 'Saxophone Colossus', 1957, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/e29d9fea-4e28-412f-8b92-93b67bcd4f85/20439700773-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '22f978cb-26e6-3757-a13a-347970574eec', 'Pharoah Sanders', 'Karma', 1969, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/df151c91-79cf-49a6-9bab-374dec6a1812/8654400318-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cf154081-2678-3778-95cf-cd31c4ea5dfe', 'Alice Coltrane', 'Journey in Satchidananda', 1971, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/2efc9b51-ab8a-3b10-883d-5821a6da989e/18788031122-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '63c29e2d-69d4-3b99-9658-9e2dcb20fa6c', 'Oscar Peterson Trio', 'We Get Requests', 1964, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/8469e6b3-6812-4d60-b779-693e0179a8fe/13463893154-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cf24f192-7cfc-3413-a80d-390b523dfbca', 'Bill Evans & Jim Hall', 'Undercurrent', 1962, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/2810f503-c196-44e6-80f0-e5f494c411a7/15298594525-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fffaa737-94cb-42b9-b1f1-44698110ea8a', 'Kamasi Washington', 'The Epic', 2015, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/d2c33d33-4752-4bfb-ad65-84dea858f4df/10278882107-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3a7817b5-22cb-32c3-a31b-2c8309fbf92e', 'Michael Jackson', 'Thriller', 1983, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/1bc5a5c1-7e4e-4a16-80f4-32a4bcd2201f/12124765400-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4d9ec1c2-58ec-48a4-aa0a-916718adead0', 'Taylor Swift', '1989', 2014, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/d5cb50d8-8897-4029-b9b3-32806df7e06d/9282848916-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e4174758-d333-4a8e-a31f-dd0edd51518e', 'Adele', '21', 2011, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/d0a60bc8-b4e9-4f1c-b9b5-c84c284493c4/34029007881-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5537624c-3d2f-4f5c-8099-df916082c85c', 'Adele', '25', 2015, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/0fd7b9f9-5921-42c1-bb90-1a3f76b7b628/12266354356-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '00de8e96-b902-3d80-b980-1298937b0b2a', 'Justin Timberlake', 'FutureSex/LoveSounds', 2006, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/128db891-c1ee-4ade-ae35-c648e6b092d3/19114172489-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c1f22e07-7bdf-4a4f-8b50-7747c1091ef6', 'Beyoncé', 'Lemonade', 2016, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/5b3de0e4-cf86-43c4-b025-80288d6f7466/35751742692-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '131d12c0-e720-31df-a2f9-d9abd868ceaf', 'Whitney Houston', 'The Bodyguard', 1985, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/3811a110-cce0-4ddd-b52f-e12c50190783/1647997357-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2660de3c-56db-4bd1-bf99-e162c68e5712', 'Justin Bieber', 'Purpose', 2015, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/006391a6-3f99-4d38-9185-50633c43fe38/12259255280-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1646286a-d0ad-4288-bfab-34b0fb7b22c1', 'SZA', 'SOS', 2022, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/b82458a3-7d3a-495f-861f-8698731c4dd0/34281078448-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'add6cf16-f4c1-3d50-9b28-633b35ca8189', 'Britney Spears', 'In the Zone', 2003, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/d693b74f-f8cf-4c09-b409-f3289f2d6701/12099399786-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0d8b973c-fcff-4830-b645-a877b8a9a08f', 'Katy Perry', 'Prism', 2013, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/4e1ea22d-be8f-4cbc-9099-dd75919ebd32/11418683802-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1ab3ba95-bc96-46f4-bc6d-1e57bc6ad1a0', 'Rihanna', 'Unapologetic', 2012, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/cc06c0f7-32b6-4a55-9e9b-dfba6c8f50e2/25491165319-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '46feff2b-8218-3432-8a01-a6082b4c93d4', 'Christina Aguilera', 'Stripped', 2002, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/0c705c13-d755-4399-9ad4-a44a853ea86b/27077721062-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2391debf-38aa-3a90-888e-51f857131e98', 'Mariah Carey', 'The Emancipation of Mimi', 2005, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/8a2ad1ee-618c-4824-9090-39075cc41297/39749365635-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3e1ef971-24c7-3a9b-ba7b-f40bc0462c38', 'Mariah Carey', 'E=MC²', 2008, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/8bbce88e-9444-478e-9e5f-f4beaa326390/25181777853-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '00351ca9-c8e0-4ac3-9f59-b2c485da9be0', 'Britney Spears', 'Glory', 2016, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/5a6e6e01-77a1-401f-9bce-e703d4da994c/26342442706-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9fe9b702-a12e-4a79-8b6b-15b20e159888', 'Kelly Clarkson', 'Breakaway', 2004, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/7e345105-b0fe-4baa-9be7-448f7a1df29f/32400122173-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ecc129fd-419f-49ef-ac02-391cd8ef5c39', 'Kate Bush', 'Hounds of Love', 1985, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/371439f4-b3ac-4f6f-badc-a95a8d1d1cd1/3472511525-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'accd791c-5948-4414-8ae2-16b71f487863', 'Lady Gaga', 'Chromatica', 2020, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/8071d480-f20b-4c29-8b87-883947442970/26323438927-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '48117b90-a16e-34ca-a514-19c702df1158', 'Daft Punk', 'Discovery', 2001, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/6cd30d99-4923-4d5e-8e51-9d87506976f1/43702618964-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '00054665-89fa-33d5-a8f0-1728ea8c32c3', 'Daft Punk', 'Homework', 1997, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/2fdcc2d7-50b9-4b27-8262-8cf9e31aaa4d/11664602418-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6842c81d-ea77-3dfd-abf7-4323add3f4d4', 'Aphex Twin', 'Selected Ambient Works 85–92', 1992, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/cbe086e2-5c1b-311c-8499-c060b0c12aac/8131224534-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '17d74d52-c92b-3b8d-9f87-218ab2d1c4a0', 'Boards of Canada', 'Music Has the Right to Children', 1998, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/c77121b6-4552-3127-9f19-685a7f8f090f/2226656435-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7f6a4e72-9fee-39db-8817-63425f97a0f5', 'Moby', 'Play', 1999, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/1cc63af7-ff3c-4ec5-a6c5-1bc5563e80d9/10778255429-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ac9138ce-6331-3f8d-86d7-69f13e4ab4f4', 'The Prodigy', 'The Fat of the Land', 1997, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/24587253-3368-4ec2-a34d-9bcd2b5de57d/34015251111-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'aa997ea0-2936-40bd-884d-3af8a0e064dc', 'Daft Punk', 'Random Access Memories', 2013, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/5000a285-b67e-4cfc-b54b-2b98f1810d2e/32554171842-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2fedcb2d-c224-3a34-b9bc-d8f8e9bea4c4', 'Justice', 'Cross', 2008, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/ab96fb63-8cd0-4bed-a6ea-cc4acca0d5e7/37214207374-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b0bf2b77-b8cf-32f6-8893-9741d757b400', 'Air', 'Moon Safari', 1998, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/793d98c5-b54f-407c-ba79-788a1d7f685a/2484782079-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a903a977-5932-4cc2-a064-57a596658b3d', 'Jamie xx', 'In Colour', 2015, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/895e844f-b9df-4036-a8ff-4527d4fc131b/15613058247-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '58726780-ad15-3b77-8da8-4baa681862e4', 'Autechre', 'LP5', 1998, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/6958251e-bc45-4dac-805f-a9ef836f7ac4/3764977631-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4b2186f5-ff00-3227-ae11-783ba93e1089', 'DJ Shadow', 'Endtroducing.....', 1996, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/40d8f956-ec2b-4e48-a430-2aeafffa0153/37970502090-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '16cc9dfc-594d-3fb9-b789-3e1bfcb6f9f8', 'New Order', 'Power Corruption & Lies', 1983, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/2cc43c63-46ca-48ae-aeed-74bb06034657/19203523471-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8183834a-6c8a-39ef-a7bc-a82f79b929e9', 'Boards of Canada', 'Geogaddi', 2002, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/5da8e677-bec2-471f-82ec-5b51133cd0c7/35875388138-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0f8ce4c1-f224-37bc-8a2c-8c930082aebd', 'St Germain', 'Tourist', 2000, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/e3000089-a5ec-4d2a-b749-1fbbe7c9a134/1285984528-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cefd427e-185e-4a94-a6a9-a03d8a53b60a', 'Disclosure', 'Settle', 2013, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/7c700ac1-80c8-4a93-9a8f-7d8e156a63b7/27041391711-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0e7a233f-81f8-3e63-ad07-6cdfe2faecc3', 'Aphex Twin', 'Selected Ambient Works Volume II', 1994, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/6682f0f1-426a-43e4-a003-a8146365e41b/17422813399-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a40c7843-979b-38a6-926a-efa31476c51c', 'Depeche Mode', 'Ultra', 1997, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/3e7e0454-c2b2-3976-b3d1-c9cdacff51ef/11289364430-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c734406b-3c8a-3214-98cc-dd553f82f813', 'Frankie Goes to Hollywood', 'Welcome to the Pleasuredome', 1984, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/43af4033-352f-4993-a0d9-ef79f4f51e6d/12578864312-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '53020b40-0983-4670-9f3d-7e0767910e8e', 'Jon Hopkins', 'Damage', 2014, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/1915be76-f78e-4431-9958-4c5db882a6e2/27418152153-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1e103be2-b071-40da-a88b-8e2f4732a8eb', 'Caribou', 'Swim', 2010, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/0c727a84-e19b-3217-b47c-2228c786d46a/4293703012-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '513341f3-3daf-46df-b469-b5eea02dc28b', 'Four Tet', 'Sixteen Oceans', 2020, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/49837acd-0dad-4c49-830b-9925aac1fbd4/25656583944-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bbef847d-0678-4a9d-9db6-3447ac72c6a2', 'Darkside', 'Psychic', 2013, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/a7fead7f-7daf-49fb-98eb-5d9f719e6c71/24932747983-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e295b8f2-a86c-49fb-8668-aaba1c9f9e4a', 'Justice', 'Woman', 2016, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/df6b0d22-fd9f-4629-9772-d0021f49de96/15193915089-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '27b682b2-dd29-3e15-8ef2-f6475f4d262f', 'The Orb', 'The Orb’s Adventures Beyond the Ultraworld', 1991, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/0cf7c809-5184-3ce4-8792-edf5b6ad68f7/18756586860-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '77d7c506-8d47-4d68-9615-f25db638bbea', 'Boards of Canada', 'Tomorrow’s Harvest', 2013, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/d1f52538-291c-45a3-80a1-ac601f84ab87/4293243591-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a7fcb5d4-4ae6-4a29-9e0f-2a7c678357d1', 'ODESZA', 'In Return', 2014, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/352ed422-6ff3-45e4-ad0b-60d7111ca67a/8241101268-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'eb4a5bf1-3ed9-4c97-809b-02919fb3c8ef', 'Boys Noize', 'Power', 2009, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/5d1d8c1d-f37d-453d-bbf3-65e236b15ffb/3049475462-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9345480c-e2d2-3cb9-9205-88c8a70e911d', 'Leftfield', 'Leftism', 1995, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/b1d94363-3005-4728-a409-990ae362bb32/38445815618-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c062737f-a5af-4119-84a6-d8b105801f75', 'Mort Garson', 'Mother Earth’s Plantasia', 1976, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/6e072e2d-a374-4e12-be63-86031ac6b90b/22583342069-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd439e300-9e92-49fc-9456-7430b2b73d0e', 'Judas Priest', 'Painkiller', 1990, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/b05be586-b142-4d88-8fd5-6b9aab45a220/36184307465-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5e8dc90d-610e-3d85-8884-a1449d74e6cc', 'Ozzy Osbourne', 'Diary of a Madman', 1981, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/5073ba98-868e-43af-aa54-2e2b5b63fa04/7124923543-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '082c68eb-d993-36cf-9b32-6663cba2d052', 'Slipknot', 'Iowa', 2001, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/8c8bde92-4c33-39dc-be53-e5109d3ff846/1070007247-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd1568d2d-8980-43bf-a7f3-93f26c020aff', 'Metallica', 'The Black Album', 2024, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/1d54025b-1bf6-40ba-a55c-2e55613d3295/38417063621-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3ab57384-506c-33ff-9ecc-e5a6134e17bd', 'Darkthrone', 'A Blaze in the Northern Sky', 1992, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/d7fad925-cc94-3070-8f12-6c909cf42c45/17222884505-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '84d8f181-8307-360f-bd50-8b6ce1309751', 'Nightwish', 'Once', 2004, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/46bd17f7-c1db-3166-b6c2-246e4a7acf22/2124285231-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '180560ee-2d9d-33cf-8de7-cdaaba610739', 'Avenged Sevenfold', 'City of Evil', 2005, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/82025247-1acc-3f76-85eb-ca09799271d1/6749364898-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ee30c026-b4f4-3e2a-94cf-7e586f1ccae0', 'Dream Theater', 'Images and Words', 1992, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/42caac42-c876-4f22-8f3f-ebcccad8cf8b/15251537725-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7902c486-f670-3336-9850-b4112079d9e6', 'Mastodon', 'Leviathan', 2004, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/9a5820c8-dbc6-34eb-97dd-401d3c421dd0/25054292616-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '982634e8-cd4d-3f7c-9f90-9b6dea315589', 'Mayhem', 'De Mysteriis Dom Sathanas', 1994, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/ed5f2309-4b7d-4ddc-a416-54ad66d4c7e6/34885719928-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '695821e7-1d7d-4506-b989-cf7897636004', 'Meshuggah', 'ObZen', 2023, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/9a573531-52a2-4393-930e-ccfe97d71cb6/35094300106-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4ab5cf84-2080-3375-b9c5-e125adf9855c', 'Children of Bodom', 'Hatebreeder', 1999, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/5fa7848d-c96c-345d-957b-d10522daa263/44046941046-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'eb035963-5a91-3e7e-b54e-186e4cd1234a', 'Agalloch', 'The Mantle', 2002, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/a590708e-1907-47ee-814b-8a3745d7b6fc/1122743860-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3495fca0-ce60-3342-93f2-23fd525d8069', 'Dead Kennedys', 'Fresh Fruit for Rotting Vegetables', 1980, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/33d6956e-3fb0-3a6b-8a47-cc2f3be2b183/20681910422-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'dd959091-dba1-32b8-8159-0090959ce75b', 'Ramones', 'Rocket to Russia', 1977, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/dd7b900f-d365-408b-bb05-9a91b9cd89b7/7235814706-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9facb8b5-4b02-3f28-9f4a-61cb9b8fd7aa', 'Wire', 'Pink Flag', 1977, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/f1d890b3-84e0-43f0-9db2-c81fc1acf39b/36502100048-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6f180553-2c6a-3529-a380-636f1232313d', 'Descendents', 'Milo Goes to College', 1982, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/38532491-fd72-4331-81ff-873b089d6e75/15770645610-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f0a28cfc-0f99-3513-8720-005643bfd95e', 'The Misfits', 'Walk Among Us', 1982, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/8f8d6079-4c72-3512-aba4-4fcddd318894/21876957398-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b96aad02-aac2-3964-9d2f-3ffb7cd0c9a3', 'Operation Ivy', 'Energy', 1989, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/3b7b3ed6-1d46-4d49-ad8d-014f3d4086bd/1482836258-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '42352def-1aab-3000-b548-895ebd869cb6', 'Joy Division', 'Unknown Pleasures', 1979, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/d2f506bb-cfb5-327e-b8d6-cf4036c77cfa/3880053972-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0bcb9f3e-e341-3ed5-ac5b-8ed5e17f9a7e', 'Minutemen', 'Double Nickels on the Dime', 1984, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/e7e28af9-2f2e-46c9-a08f-5e6215054a5e/35983126748-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd49f2704-3677-4ba4-8162-e2bd83c76417', 'Refused', 'The Shape of Punk to Come', 2024, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/c5bb1efa-34f4-4842-93f7-339ed6f0e933/40027502691-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e77cf66f-8db3-3684-bc34-b1d04a7d67cf', 'Against Me!', 'Against Me! Is Reinventing Axl Rose', 2000, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/59b128d8-7365-4d29-81a5-4efbfb047a22/11257866818-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '67ba7dda-893f-32ed-930c-f8ff5f5df18a', 'Suffer', 'Bad Religion', 1988, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/61cc0e1b-9e23-472c-a4f3-67db405e0c1d/3242437488-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'dd2c168f-41a6-37f5-a727-6e188bf22c6e', 'Sum 41', 'All Killer No Filler', 2001, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/3a851121-dc2c-44b0-9991-8edc20435f58/29464249276-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3ed0e51d-62a4-3957-ab42-579c6f8c148b', 'The Damned', 'Damned Damned Damned', 1977, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/96c27010-925a-4e75-86a4-b55ad42480c5/5641811873-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2e30aefe-004b-3680-8ad4-4b2398d8e0ed', 'The Damned', 'Machine Gun Etiquette', 1979, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/2f803106-a53a-49f4-8b9c-991a38a1b3b8/11574025842-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4cdd4c59-e38f-382b-b01c-e69829faa69c', 'New York Dolls', 'New York Dolls', 1973, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/07259559-743c-4f92-8eb3-205287ef1c90/5538195076-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd0493944-992b-3534-9174-8320c1879837', 'Gang of Four', 'Entertainment!', 1979, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/844c0de9-d040-492b-af05-6ae2f8f6bcf5/43109848254-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3d86cdea-11df-3b99-ab00-bb6193bd2103', 'Nick Cave & The Bad Seeds', 'From Her to Eternity', 1984, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/ff3a76e6-cb0c-4b8a-b2b7-53d22c9e6697/6461640112-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '98e1c658-228a-3b29-8a15-3937ff6964fe', 'Crass', 'The Feeding of the 5000', 1979, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/fcce38d3-7b20-484f-8d59-e11d5d2a51a3/30537743874-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ff293ba8-2ecc-39c2-8333-b730e53cd148', 'AFI', 'Black Sails in the Sunset', 1999, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/5100dc6d-7191-483c-901d-cdb95bf06f88/9391419330-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c2170388-193b-32ba-9983-fffa0cf34d30', 'AFI', 'The Art of Drowning', 2000, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/7e8b8b05-0ca0-4e6f-99fa-e000729c636c/8039802259-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2a4d791d-b328-3212-8bef-edc98c7de3f7', 'Jawbreaker', 'Dear You', 1995, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/7086c733-4ced-4f36-b024-74404bb7ab80/3357063370-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3bead24e-86b1-36c5-adfb-5a580355efb8', 'The Housemartins', 'London 0 Hull 4', 1986, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/4820f1d1-2124-4c27-b331-853a7a917936/30357183333-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '740ec10a-e887-38a6-a04d-fe2069c9e2a7', 'Nick Drake', 'Pink Moon', 1972, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/8fc8c213-6de1-4552-8196-1c65989c389d/39411588958-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ea88b09b-fd34-33cf-a3e5-25a3a2fb4c6f', 'Stevie Wonder', 'Songs in the Key of Life', 1976, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/e3a0afcc-79fa-44da-ab29-0da9973eac24/1673790310-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7d8f07a7-4c64-3afb-8daf-8f1d4df89a78', 'Aretha Franklin', 'I Never Loved a Man the Way I Love You', 1967, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/dab4a1dc-e7d1-4e8b-b39a-5573a310f974/26503165857-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bf413a18-f7cb-4aa4-94a0-42addebb8eb7', 'Sly & The Family Stone', 'Stand!', 1969, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/0c106850-4531-43a2-b54c-0edbe9b9a88e/40011830835-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e626b377-74c5-3b97-8f16-8cef5e1c04ea', 'Stevie Wonder', 'Innervisions', 1973, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/f5b19d0e-1398-41db-a24f-50b3f6599a39/1243783912-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '05571372-5b11-39b7-89c5-1c02589a27c8', 'Aretha Franklin', 'Lady Soul', 1968, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/5c9b9213-c85c-43fd-8522-de03df8e0b1d/15463598991-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e76d4f75-f09b-3f5b-aca9-44ac4489e58d', 'Isaac Hayes', 'Hot Buttered Soul', 1969, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/6b7fb2e0-98c1-4aea-8b1b-5b121ab579c9/15064271357-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9605c075-c64c-366b-ad7f-ec98523fc162', 'D’Angelo', 'Voodoo', 2000, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/7dbf3ed6-7927-3f35-adc2-3b46b97eca60/4839084652-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f8f4167d-897c-4b25-a171-638374d1dfa4', 'Frank Ocean', 'Channel Orange', 2012, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/a942130d-bf15-4a5b-9903-a2bd69792e0a/27572658405-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '331a7ba1-fae2-4881-b434-554f46c13746', 'Solange', 'A Seat at the Table', 2016, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/3e3c90cd-0c0c-4beb-8f7b-b95a076c89eb/14763601258-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8f892c1b-0709-4cf4-9711-493892a9eb9b', 'SZA', 'Ctrl', 2017, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/7ffe5c0f-99a5-4a53-affc-75ae8241bbf0/16823622437-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5bb501c6-2e78-393d-bcac-27d7d1b44a27', 'Janet Jackson', 'The Velvet Rope', 1997, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/f1cf04bd-f968-4fad-9eb5-7faefe9cb430/27271828673-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '225a6648-d4d2-3b89-986b-6e515e7a94f0', 'Marvin Gaye', 'Here My Dear', 1978, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/4c413791-f9de-4259-b971-1bb2f7c678a4/5486950797-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4f830db1-c8f5-4829-8c55-ebfbcdb21266', 'Otis Redding', 'The Dock of the Bay', 1984, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/7815b7cb-4457-4924-af45-5f86d90b32ed/42197570200-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f62ec525-7158-37c1-8535-6eaac62435b3', 'Aretha Franklin', 'Young Gifted and Black', 1972, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/b95151ff-e3e8-4eff-8708-079e782d3498/15043463152-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ef794c71-5814-489e-b0ad-42ccebcc71a4', 'James Brown', 'Live at the Apollo', 2015, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/f60637e2-bd33-4598-a7ca-ba4a4f1a7cf5/31872531361-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b3d96626-4d46-4012-b6cb-e8d8b192a4f1', 'D’Angelo', 'Black Messiah', 2014, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/daa89cce-3e72-4e6a-a4dc-0337dee8f9cf/12882995749-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7c5bb286-ac24-443c-81cc-4f5f6261c343', 'Janelle Monáe', 'The ArchAndroid', 2010, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/81d608bc-f8d0-4991-8969-8c9b72e4b1cd/19774841771-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd5311d10-3fe1-4ee1-9347-931af482b857', 'Billie Holiday', 'Lady Sings the Blues', 2005, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/e4bb8c4e-fd66-4d79-ad07-eca7aedb2fa9/28497001885-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2e3c5c50-f22b-3d7a-8fc8-f33ad3042b8b', 'Bill Withers', 'Ain''t No Sunshine', 1997, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/a72b6fc9-e31e-497b-8cc8-5e8dd8ddc9ad/39307639501-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '63544e97-de86-3096-8702-250590ae5f90', 'Bill Withers', 'Still Bill', 1972, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/de3fc9ac-4f6b-42a4-bbe6-f06b9ba7411c/43400883874-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3a85abb4-6666-37b2-a9d1-1ea4bbc1deef', 'The Isley Brothers', 'The Heat Is On', 1975, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/c00b9559-4520-446c-8f1f-26117bd338c0/18596376440-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cdc4e3e5-8366-3985-aa28-b23b836d2bcc', 'Soul II Soul', 'Soul II Soul Club Classics Vol. One', 1989, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/122b6782-e9e3-3ea3-9947-1dc6ab6946ce/35395744653-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2391debf-38aa-3a90-888e-51f857131e98', 'Mariah Carey', 'The Emancipation of Mimi', 2005, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/8a2ad1ee-618c-4824-9090-39075cc41297/39749365635-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6ee2c096-526b-4c39-a939-8a38dea54d58', 'Leon Bridges', 'Good Thing', 2018, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/f3286cfd-ab9e-4f60-8505-e5f284390238/19614059332-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4e44335c-3f2b-4874-a6c3-71b5e65f75d5', 'Kendrick Lamar', 'Untitled Unmastered', 2016, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/e1c25e3c-8b50-4888-98c4-64363174572c/37153690703-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5701e04b-efc2-3429-b8af-c6596f1d08cf', 'Alicia Keys', 'Songs in A Minor', 2001, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/7189231c-4757-4020-82b6-ccb96cca7884/34560842694-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e53e291f-9a9c-38a0-96e0-86a9b63b776d', 'Alicia Keys', 'The Diary of Alicia Keys', 2003, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/3993f8e0-ab08-482b-8247-b6186126ff0e/36046505312-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1646286a-d0ad-4288-bfab-34b0fb7b22c1', 'SZA', 'SOS', 2022, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/b82458a3-7d3a-495f-861f-8698731c4dd0/34281078448-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ee749c63-5699-38e0-b565-7e84414648d9', 'Michael Jackson', 'Off the Wall', 1979, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/6258e39d-bef4-4d5a-a654-440cf4c4c29a/5349015874-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0da340a0-6ad7-4fc2-a272-6f94393a7831', 'Frank Ocean', 'Blonde', 2016, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/8294645a-f996-44b6-9060-7f189b9f59f3/14420632959-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'af2a0c41-e612-3232-949d-bdca340c407c', 'Sade', 'Diamond Life', 1984, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/98063a3f-563e-3b9e-be19-af33da0fef52/8211603614-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e4a67add-6aab-390c-bb82-53939fb9cd0a', 'Sade', 'Love Deluxe', 1992, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/49c1eeeb-919f-33d2-b72d-71b3fa5572cf/5391926442-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '25bdfd28-72ca-3d1f-88fc-dcf67df91720', 'Erykah Badu', 'Mama''s Gun', 2000, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/b6b5b654-5c60-4520-b099-4a50d33e2bd0/882556108-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '45536412-c62c-34fc-9524-0bac1d2542c1', 'Erykah Badu', 'Baduizm', 1997, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/6e3c9aef-8a10-4597-a12d-a1783c6ece77/40069662962-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '322f18bb-5491-38e9-9044-c0a468651eec', 'Herbie Hancock', 'Head Hunters', 1973, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/52dda2f2-d7ee-4ec5-b00e-b1f4f86ebb95/36789594055-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ea88b09b-fd34-33cf-a3e5-25a3a2fb4c6f', 'Stevie Wonder', 'Songs in the Key of Life', 1976, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/e3a0afcc-79fa-44da-ab29-0da9973eac24/1673790310-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bf413a18-f7cb-4aa4-94a0-42addebb8eb7', 'Sly & The Family Stone', 'Stand!', 1969, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/0c106850-4531-43a2-b54c-0edbe9b9a88e/40011830835-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ee749c63-5699-38e0-b565-7e84414648d9', 'Michael Jackson', 'Off the Wall', 1979, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/6258e39d-bef4-4d5a-a654-440cf4c4c29a/5349015874-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '24317b66-f34f-3b0c-9c73-7971c637ad47', 'Rick James', 'Street Songs', 1981, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/34663e63-d771-3cd5-83da-31eeefb4e11a/4279191141-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd8b8448a-2634-3e92-ac86-cf55e018f825', 'Sly & The Family Stone', 'There’s a Riot Goin’ On', 1971, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/75717ad0-80a8-31dc-8292-c0231625d2af/11265442877-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e76d4f75-f09b-3f5b-aca9-44ac4489e58d', 'Isaac Hayes', 'Hot Buttered Soul', 1969, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/6b7fb2e0-98c1-4aea-8b1b-5b121ab579c9/15064271357-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '978d88db-60ec-41d9-ade7-beea020941b0', 'Bruno Mars', 'Unorthodox Jukebox', 2012, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/94238177-512d-48b8-b8d2-572d3f228863/11539415446-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b3d96626-4d46-4012-b6cb-e8d8b192a4f1', 'D’Angelo', 'Black Messiah', 2014, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/daa89cce-3e72-4e6a-a4dc-0337dee8f9cf/12882995749-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3a85abb4-6666-37b2-a9d1-1ea4bbc1deef', 'The Isley Brothers', 'The Heat Is On', 1975, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/c00b9559-4520-446c-8f1f-26117bd338c0/18596376440-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c026bf5e-ea8e-31b2-b372-4f76a1403acd', 'Sly & The Family Stone', 'Fresh', 1973, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/eb702f36-9159-4de6-a59a-c97381c29f19/42802548284-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '18066b25-46dc-39af-a8e9-548bb8d371f9', 'Parliament', 'Give Up the Funk', 1995, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/e76ab868-b8cc-495c-870d-14473b63134a/21750485327-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ad444843-7160-33d7-b0c9-fc99f2c14a99', 'Dr. Dre', 'The Chronic', 1992, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/0001a90e-252d-3af0-8e1c-173c1c4835c3/38739120180-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '13045772-371a-470a-95da-44b7e3488224', 'Mark Ronson', 'Uptown Special', 2015, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/0577f225-9866-4fe2-9c23-e52c37186a99/19394943642-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0c24e81f-b710-3e24-a4fa-12950e153585', 'Curtis Mayfield', 'Curtis', 1970, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/34bf0064-0b15-4759-9964-d177c58fc7d8/19800314051-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '11deb7b3-c4d5-3e46-809f-f23123602dca', 'Prince', 'The Gold Experience', 1995, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/b79433d4-68de-461b-acc3-bcd8d28ce476/19052137951-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'dc7a73e4-b92a-4000-8ae5-d87492dfcbb1', 'Robert Glasper Experiment', 'Black Radio II', 2012, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/08b7d1e7-5c27-4591-918e-e8525d1fc2d7/39305073347-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c7400a4b-26cc-4720-aadc-e061b86d693a', 'Janelle Monáe', 'The Electric Lady', 2013, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/ed404242-bf57-47c0-9320-3ee9ec1ef0ce/5267813243-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '97a8636b-af26-46b9-a3f4-4ed57c75a2da', 'Silk Sonic', 'An Evening with Silk Sonic', 2021, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/98637992-bf58-4a3f-911e-59f1fa14ea74/30922850185-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b0ec318b-e2ed-3f65-b40f-f3cdaa52b5fb', 'The Meters', 'Funkify Your Life', 1995, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/1bc512a3-c122-4d20-a460-9615b0bdc6a0/31575949707-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a204f4c2-394c-4007-9999-80702982fd09', 'The Meters', 'Cissy Strut', 1974, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/3ed7d1b1-252a-4ba8-bc88-161c5c42a064/34581907252-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'af7ec21c-c921-445c-bc4e-2fa6d8fc04e9', 'War', 'The World Is a Ghetto', 1980, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/f96e86c6-c0ae-4085-81e9-3b911d0f9c4a/17759112803-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6adfd688-af5a-3771-942d-fccb00fc349e', 'War', 'War Live', 1973, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/be2740eb-3761-4178-96d5-864b85f46758/18779116933-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e9845207-8ae3-36db-b0e1-2efcdb46687d', 'Earth Wind & Fire', 'That''s the Way of the World', 1975, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/0610cfdc-f25f-41d0-9f15-9e12745fe8e6/5990431619-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1e76c0b3-6f97-3e07-978a-9eea0010a4d6', 'Earth Wind & Fire', 'Gratitude', 1975, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/10746efc-eda5-31b7-ad21-c8ddc7b6e2fc/17519101479-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '02cabda8-fc43-3d4a-b38d-c2d989cb556c', 'War', 'All Day Music', 1971, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/65b6bd37-0a1f-4720-aa9c-94d497eb1fc0/11934418802-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b3b34cd9-0c9b-37dd-80a1-0f74e80f18fe', 'Ahmad Jamal Trio', 'The Awakening', 1970, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/1ea31285-9201-4631-a293-ad85c9a41ab3/25961556875-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9605c075-c64c-366b-ad7f-ec98523fc162', 'D’Angelo', 'Voodoo', 2000, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/7dbf3ed6-7927-3f35-adc2-3b46b97eca60/4839084652-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f8f4167d-897c-4b25-a171-638374d1dfa4', 'Frank Ocean', 'Channel Orange', 2012, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/a942130d-bf15-4a5b-9903-a2bd69792e0a/27572658405-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'dd8956b0-f828-47ea-9998-0539eeefe8cc', 'Various Artists', 'Saturday Night Fever', 2017, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/9830ba5c-f24d-4df5-9d1a-76db4c19cb40/37147672844-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ffade2ce-578c-3047-a82c-2b8cf979cc18', 'Donna Summer', 'Bad Girls', 1979, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/a00a258f-66a4-422a-82ae-f27c3cb13924/35939520246-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'db46b19c-0e97-30de-ba53-7e823104d14a', 'Chic', 'C’est Chic', 1978, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/ee5e159b-b73f-4ecf-8857-5f363bf9ac61/29300666818-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'baa74317-3f23-3f0b-a996-c68f52c61f13', 'Chic', 'Risqué', 1979, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/e7f2c9bb-d26d-4afe-9ac3-54ed8772196d/11479816051-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ee749c63-5699-38e0-b565-7e84414648d9', 'Michael Jackson', 'Off the Wall', 1979, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/6258e39d-bef4-4d5a-a654-440cf4c4c29a/5349015874-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '48117b90-a16e-34ca-a514-19c702df1158', 'Daft Punk', 'Discovery', 2001, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/6cd30d99-4923-4d5e-8e51-9d87506976f1/43702618964-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'aa997ea0-2936-40bd-884d-3af8a0e064dc', 'Daft Punk', 'Random Access Memories', 2013, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/5000a285-b67e-4cfc-b54b-2b98f1810d2e/32554171842-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f312446e-bb18-43a3-8af0-2cdbc2f98e19', 'Donna Summer', 'Hot Stuff', 1979, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/53f1ce6e-ed06-4fb7-bd66-c4cd4c18992b/20646419598-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f624ead2-e4ba-4e52-bea5-4362b1c67b14', '50 Cent', 'Get Rich or Die Tryin''', 2003, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/8a41278f-09ec-4508-8609-0454be1f0473/36228538618-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9b4d952f-3049-3d4a-a113-e9a7f04caf60', 'Boney M.', 'Nightflight to Venus', 1978, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/ca881a5e-ea9d-4009-aa4d-55274c3bf574/28871338371-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e464e167-83ab-3b59-88bd-262cf552056e', 'ABBA', 'Arrival', 1976, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/bc141786-124f-4690-aa6f-828afb9b3297/3127628964-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7401fb97-46e6-32cd-bd59-6c49debaa3ae', 'ABBA', 'Voulez-Vous', 1979, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/4138236f-05c6-3494-b6d8-5d460024ed21/12551767179-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '866e9d8e-200e-334c-8df6-9b8f8384bb22', 'Earth Wind & Fire', 'I Am', 1979, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/f847cfef-3b07-4903-ab57-1a592b7d7b4c/9467398666-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a07e8e68-15e3-452b-aff1-4f9d7ef50d4e', 'Madonna', 'Madonna', 1980, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/662ebe35-f168-4e4c-bf0d-0a3d828dd8f2/20240605203-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e9af50f6-af7d-4b9d-bb76-e8b44e2c50fd', 'Sheila', 'Sheila and B. Devotion', 1962, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/db1035e3-5fa4-486c-8445-d9f435213b8c/35363080948-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1a3770b8-3a65-490d-a2b2-92fa6f79d4bc', 'Cerrone', 'Supernature', 1977, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/881bb066-9112-48f8-9ce6-43c08fc82a08/6735499420-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'aa790610-b542-348d-972c-4e467ceaa012', 'Diana Ross', 'I''m Coming Out', 1980, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/285fb13e-4da0-4748-b079-2071978fb5c1/4641930487-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'de0fd880-7f91-4c2c-a01e-921707da8edb', 'Rose Royce', 'Car Wash', 1976, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/d2439f89-e16a-4ae7-b357-0f4133ed284a/9891079839-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9bd8424e-2d4c-42ce-9652-4046c1acb9d2', 'Thelma Houston', 'Don’t Leave Me This Way', 1976, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/f178d59a-f838-4883-a83c-264b2b7137c3/32666621772-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ed6aaf63-7e4e-48d5-a8cb-69d63d349b12', 'Peaches & Herb', 'Shake Your Groove Thing', 1978, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/1d849a2c-9be8-4995-80d3-1236dcbb8b16/38066690718-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7c6ffe54-fc79-3afa-b184-18ebd6930196', 'Lipps Inc.', 'Funky Town', 2003, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/61bd2da2-6617-4f07-b119-7944a87c7157/24940505331-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '23b29f62-6452-33d3-86a6-e38bc51f888d', 'KC and the Sunshine Band', 'Get Down Tonight', 1975, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/93fa6598-02b2-4a24-9182-64e8bad9e7fd/9560381238-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b23d3137-df51-3047-a6a5-b5efbde50f22', 'Janet Jackson', 'Control', 1986, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/726e58be-d2d1-487c-8bac-b0dc6c66f4e7/38914699566-500.jpg');
