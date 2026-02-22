// Curated seed albums - verified to exist in MusicBrainz with cover art
// Auto-generated from Supabase albums table
// Total: 521 albums across 40 genres

export type SeedAlbum = {
  artist: string;
  title: string;
  year: number;
  country: "UK" | "US";
  mbid?: string;
  visualWeight: number;
  trivia?: string;
};

export const SEED_ALBUMS: Record<string, SeedAlbum[]> = {
  // 80S HIP HOP (9 albums)
  "80s Hip Hop": [
    { artist: "Public Enemy", title: "It Takes a Nation of Millions to Hold Us Back", year: 1988, country: "US", mbid: "01921d99-9d15-3fce-8734-46e58327cfb7", visualWeight: 8 },
    { artist: "N.W.A", title: "Straight Outta Compton", year: 1988, country: "US", mbid: "fed1608d-80b7-38d2-aeb8-c6357f0d4c23", visualWeight: 8 },
    { artist: "Eric B. & Rakim", title: "Paid in Full", year: 1987, country: "US", mbid: "6dd9c023-1c11-4f2d-b858-5ea382d77bfd", visualWeight: 8 },
    { artist: "De La Soul", title: "3 Feet High and Rising", year: 1989, country: "US", mbid: "5243f39c-c344-3989-a0f6-2a2f75a9d827", visualWeight: 8 },
    { artist: "Beastie Boys", title: "Licensed to Ill", year: 1986, country: "US", mbid: "57f5e7c8-2a6e-34a0-b4cd-0e77695bc36f", visualWeight: 8 },
    { artist: "Boogie Down Productions", title: "Criminal Minded", year: 1987, country: "US", mbid: "420e3df4-6322-3399-8144-29ef7eb62e42", visualWeight: 8 },
    { artist: "LL Cool J", title: "Radio", year: 1985, country: "US", mbid: "32511a9b-a392-35ce-8173-b4b262229fc4", visualWeight: 8 },
    { artist: "Salt-N-Pepa", title: "Hot Cool & Vicious", year: 1986, country: "US", mbid: "064a787b-9619-3b66-b5f6-606396df0354", visualWeight: 8 },
    { artist: "Big Daddy Kane", title: "Long Live the Kane", year: 1988, country: "US", mbid: "1290169e-b938-3b21-83e4-ec7dc2c0f70a", visualWeight: 8 },
  ],

  // 90S HIP HOP (35 albums)
  "90s Hip Hop": [
    { artist: "A Tribe Called Quest", title: "The Low End Theory", year: 1991, country: "US", mbid: "c3733436-fcba-3c08-b082-d548df5c5139", visualWeight: 8 },
    { artist: "Wu-Tang Clan", title: "Enter the Wu-Tang (36 Chambers)", year: 1993, country: "US", mbid: "610fb60f-900a-3c42-ac7d-f6b6aa8035f9", visualWeight: 8 },
    { artist: "Nas", title: "Illmatic", year: 1994, country: "US", mbid: "28298e2c-4d70-3eed-a0f5-a3280c662b3d", visualWeight: 8 },
    { artist: "The Notorious B.I.G.", title: "Ready to Die", year: 1994, country: "US", mbid: "5afcfeac-118a-35e6-af0d-35ec9003354d", visualWeight: 8 },
    { artist: "Dr. Dre", title: "The Chronic", year: 1992, country: "US", mbid: "ad444843-7160-33d7-b0c9-fc99f2c14a99", visualWeight: 8 },
    { artist: "Snoop Doggy Dogg", title: "Doggystyle", year: 1993, country: "US", mbid: "649762c9-8785-3d9c-803d-2f0496f168e5", visualWeight: 8 },
    { artist: "Outkast", title: "ATLiens", year: 1996, country: "US", mbid: "672fa6be-ae6a-38a2-a0d3-6a393a3929bf", visualWeight: 8 },
    { artist: "Fugees", title: "The Score", year: 1996, country: "US", mbid: "dd2203dd-a149-316b-ad7f-a303dc4fc459", visualWeight: 8 },
    { artist: "Mobb Deep", title: "The Infamous", year: 1995, country: "US", mbid: "03f3c216-bd40-322b-ac8a-254816ff5573", visualWeight: 8 },
    { artist: "Gang Starr", title: "Moment of Truth", year: 1998, country: "US", mbid: "248b3e39-8504-3253-97be-e6afdf6c22fa", visualWeight: 8 },
    { artist: "Ice Cube", title: "AmeriKKKa's Most Wanted", year: 1990, country: "US", mbid: "f7e8792d-4aaf-389c-b0e5-a4bbae2bacdf", visualWeight: 8 },
    { artist: "Cypress Hill", title: "Cypress Hill", year: 1991, country: "US", mbid: "6845afb3-c21c-47ef-9fae-6244fd8b74d2", visualWeight: 8 },
    { artist: "Scarface", title: "The Diary", year: 1994, country: "US", mbid: "bc009ee0-05bc-37f9-8b07-ce93e09131eb", visualWeight: 8 },
    { artist: "Ice-T", title: "O.G. Original Gangster", year: 1991, country: "US", mbid: "5efcd612-f7d0-3eaa-bd04-b712b80f25af", visualWeight: 8 },
    { artist: "Geto Boys", title: "We Can't Be Stopped", year: 1991, country: "US", mbid: "80cebcb2-da2a-3cc9-8f73-573b9908c5f5", visualWeight: 8 },
    { artist: "Bone Thugs-n-Harmony", title: "E. 1999 Eternal", year: 1995, country: "US", mbid: "5262e658-652f-33aa-af8f-6af28c2da7aa", visualWeight: 8 },
    { artist: "The D.O.C.", title: "No One Can Do It Better", year: 1989, country: "US", mbid: "65b0321c-4852-3e7f-a622-706d600ab485", visualWeight: 8 },
    { artist: "Above the Law", title: "Livin' Like Hustlers", year: 1990, country: "US", mbid: "78a6c356-b04d-3914-9580-303d89bdff21", visualWeight: 8 },
    { artist: "Compton's Most Wanted", title: "It's a Compton Thang", year: 1990, country: "US", mbid: "108df8cc-5025-3399-98eb-f8e9f9246a37", visualWeight: 8 },
    { artist: "Common", title: "Resurrection", year: 1994, country: "US", mbid: "f13ce34a-18c5-338e-a33e-f8723375fe9d", visualWeight: 8 },
    { artist: "Mos Def", title: "Black on Both Sides", year: 1999, country: "US", mbid: "d6658b47-463a-390e-9417-99c818aea004", visualWeight: 8 },
    { artist: "Black Star", title: "Mos Def & Talib Kweli Are Black Star", year: 1998, country: "US", mbid: "aaa445c1-5f73-37c0-b53a-2444b279c538", visualWeight: 8 },
    { artist: "Redman", title: "Whut? Thee Album", year: 1992, country: "US", mbid: "bc239359-3ced-3684-a8b2-c7dfc1d0cb5b", visualWeight: 8 },
    { artist: "Raekwon", title: "Only Built 4 Cuban Linx...", year: 1995, country: "US", mbid: "ab981b48-9a7b-34c4-b46a-f6266317ce7c", visualWeight: 8 },
    { artist: "Company Flow", title: "Funcrusher Plus", year: 1997, country: "US", mbid: "e6e03027-2955-38b5-ba9f-2076297f8528", visualWeight: 8 },
    { artist: "KRS-One", title: "Return of the Boom Bap", year: 1993, country: "US", mbid: "a03a1ce3-3e3e-31b1-92e5-9f142ba2ad0c", visualWeight: 8 },
    { artist: "Pete Rock & CL Smooth", title: "Mecca and the Soul Brother", year: 1992, country: "US", mbid: "7eb6da03-0f1f-3303-b079-8cba2f18c530", visualWeight: 8 },
    { artist: "DJ Quik", title: "Quik Is the Name", year: 1991, country: "US", mbid: "c7504e89-7091-3473-9595-3952d5e0ca30", visualWeight: 8 },
    { artist: "The Roots", title: "Do You Want More?!!!??!", year: 1995, country: "US", mbid: "8db4c09a-eeaf-3887-96fa-144ac1723651", visualWeight: 8 },
    { artist: "Talib Kweli", title: "Quality", year: 2002, country: "US", mbid: "036299a6-1fcb-3c46-80d7-b41869ba75b8", visualWeight: 8 },
    { artist: "Busta Rhymes", title: "The Coming", year: 1996, country: "US", mbid: "fd3633d9-5c56-3016-97cd-b232a4a6d576", visualWeight: 8 },
    { artist: "Method Man", title: "Tical", year: 1994, country: "US", mbid: "85af95fb-f93d-30e9-b60e-9ee6eb00d42b", visualWeight: 8 },
    { artist: "GZA", title: "Liquid Swords", year: 1995, country: "US", mbid: "3e56d123-8b66-47f1-912a-e2e4cda69c5e", visualWeight: 8 },
    { artist: "Jeru the Damaja", title: "The Sun Rises in the East", year: 1994, country: "US", mbid: "4c1feb97-bc6c-32f9-8adb-bd85105fdaa0", visualWeight: 8 },
    { artist: "EPMD", title: "Strictly Business", year: 1988, country: "US", mbid: "e6c7f24b-2f5e-45e0-945e-4235900210f4", visualWeight: 8 },
  ],

  // 90S R&B (15 albums)
  "90s R&B": [
    { artist: "Boyz II Men", title: "II", year: 1994, country: "US", mbid: "6eaebb45-8911-3d0b-8ef3-914726356144", visualWeight: 8 },
    { artist: "TLC", title: "CrazySexyCool", year: 1994, country: "US", mbid: "3d886c06-a4c7-3431-be87-2b2940f07acd", visualWeight: 8 },
    { artist: "Mary J. Blige", title: "My Life", year: 1994, country: "US", mbid: "49acb129-7958-3132-988c-bb85955b1c3c", visualWeight: 8 },
    { artist: "D'Angelo", title: "Brown Sugar", year: 1995, country: "US", mbid: "a1933fbb-9e54-4ee8-8bcd-1b17db10a1b7", visualWeight: 8 },
    { artist: "Lauryn Hill", title: "The Miseducation of Lauryn Hill", year: 1998, country: "US", mbid: "8691d12c-abd8-385c-b1eb-d841190124f7", visualWeight: 8 },
    { artist: "Aaliyah", title: "One in a Million", year: 1996, country: "US", mbid: "137480a6-35e7-3daa-a4df-57db2f821892", visualWeight: 8 },
    { artist: "Usher", title: "My Way", year: 1997, country: "US", mbid: "863da476-aecb-3175-8a53-b55c3702c504", visualWeight: 8 },
    { artist: "Janet Jackson", title: "The Velvet Rope", year: 1997, country: "US", mbid: "5bb501c6-2e78-393d-bcac-27d7d1b44a27", visualWeight: 8 },
    { artist: "En Vogue", title: "Funky Divas", year: 1992, country: "US", mbid: "6ec45cd6-66d5-3d6e-93f3-ad3320055dca", visualWeight: 8 },
    { artist: "Tony! Toni! Toné!", title: "Sons of Soul", year: 1993, country: "US", mbid: "0a9d1ecc-483b-30c8-8c91-2f54bb4e08c6", visualWeight: 8 },
    { artist: "Destiny's Child", title: "The Writing's on the Wall", year: 1999, country: "US", mbid: "7bfda0d3-5747-3f7c-a60f-065b6ea29db1", visualWeight: 8 },
    { artist: "Brandy", title: "Never Say Never", year: 1998, country: "US", mbid: "9eb8a155-ce56-48b8-9af7-6e76e29bb93d", visualWeight: 8 },
    { artist: "Monica", title: "Miss Thang", year: 1995, country: "US", mbid: "7bc19aa4-3168-36a9-aee7-8911d1a43248", visualWeight: 8 },
    { artist: "112", title: "112", year: 1996, country: "US", mbid: "feff0874-1e66-3f19-afa7-ce43653e912b", visualWeight: 8 },
    { artist: "Blackstreet", title: "Blackstreet", year: 1994, country: "US", mbid: "d12b5ae9-6d46-3a8c-bfc6-5347b9120763", visualWeight: 8 },
  ],

  // ACID JAZZ (9 albums)
  "Acid Jazz": [
    { artist: "Jamiroquai", title: "The Return of the Space Cowboy", year: 1994, country: "UK", mbid: "ec79a9d4-6fa3-38b9-b976-bcd2c56cd477", visualWeight: 8 },
    { artist: "Brand New Heavies", title: "Brother Sister", year: 1994, country: "UK", mbid: "89b744f6-a180-3c5a-9542-9fee05848b97", visualWeight: 8 },
    { artist: "Incognito", title: "Positivity", year: 1993, country: "UK", mbid: "5e96d633-99cf-313d-8724-5a7ba978e498", visualWeight: 8 },
    { artist: "Stereo MC's", title: "Connected", year: 1992, country: "UK", mbid: "6241fe40-156f-4ad4-b579-c6e2e71f4309", visualWeight: 8 },
    { artist: "Galliano", title: "In Pursuit of the 13th Note", year: 1991, country: "UK", mbid: "d70b72b0-c222-3320-b18f-8583eedc9198", visualWeight: 8 },
    { artist: "Corduroy", title: "Out of Here", year: 1994, country: "UK", mbid: "07e13a57-6382-3ae3-9d52-a0775a253fa1", visualWeight: 8 },
    { artist: "Us3", title: "Hand on the Torch", year: 1993, country: "UK", mbid: "8ed94489-830c-3a86-9772-f9a84354ff43", visualWeight: 8 },
    { artist: "Digable Planets", title: "Reachin' (A New Refutation of Time and Space)", year: 1993, country: "US", mbid: "2836fcb0-2fd3-3de8-b7cc-53141d666894", visualWeight: 8 },
    { artist: "Guru", title: "Jazzmatazz Vol. 1", year: 1993, country: "US", mbid: "cb4db891-330d-394d-af54-3edc37e8416e", visualWeight: 8 },
  ],

  // ALTERNATIVE ROCK (23 albums)
  "Alternative Rock": [
    { artist: "Radiohead", title: "OK Computer", year: 1997, country: "UK", mbid: "b1392450-e666-3926-a536-22c65f834433", visualWeight: 8 },
    { artist: "R.E.M.", title: "Automatic for the People", year: 1992, country: "US", mbid: "c86c6af9-d10e-3079-b34b-30b682a797eb", visualWeight: 8 },
    { artist: "Beck", title: "Odelay", year: 1996, country: "US", mbid: "a1e32d7c-dd4c-419c-b7a3-6d3ed3aa5c0b", visualWeight: 8 },
    { artist: "Pavement", title: "Crooked Rain Crooked Rain", year: 1994, country: "US", mbid: "4f348977-6f44-39f9-b243-071927ecc6a4", visualWeight: 8 },
    { artist: "Guided by Voices", title: "Bee Thousand", year: 1994, country: "US", mbid: "b30f876f-1fe6-34ef-b334-9c68af820daa", visualWeight: 8 },
    { artist: "Modest Mouse", title: "The Lonesome Crowded West", year: 1997, country: "US", mbid: "041884b1-1ac5-3c8b-93cc-ac928c78c4a0", visualWeight: 8 },
    { artist: "Nine Inch Nails", title: "The Downward Spiral", year: 1994, country: "US", mbid: "7c4cab8d-dead-3870-b501-93c90fd0a580", visualWeight: 8 },
    { artist: "The Smashing Pumpkins", title: "Mellon Collie and the Infinite Sadness", year: 1995, country: "US", mbid: "1af599c9-0b44-3a5a-a06b-39e8db6b2b4e", visualWeight: 8 },
    { artist: "Sonic Youth", title: "Goo", year: 1990, country: "US", mbid: "8114542a-d659-3b5f-a11f-cf86ed7fa84d", visualWeight: 8 },
    { artist: "Jane's Addiction", title: "Nothing's Shocking", year: 1988, country: "US", mbid: "97b7e291-8714-3e54-ac24-480be535ee8d", visualWeight: 8 },
    { artist: "Red Hot Chili Peppers", title: "Blood Sugar Sex Magik", year: 1991, country: "US", mbid: "68bee70d-b425-3813-aca7-dd7b912c3d11", visualWeight: 8 },
    { artist: "Helmet", title: "Meantime", year: 1992, country: "US", mbid: "12f44455-925d-353c-9bdc-fd70885b1bc2", visualWeight: 8 },
    { artist: "Girls Against Boys", title: "Venus Luxure No. 1 Baby", year: 1993, country: "US", mbid: "2354a012-7614-349e-9fa5-0ea5f2918cbc", visualWeight: 8 },
    { artist: "Weezer", title: "Weezer", year: 1994, country: "US", mbid: "c27987a9-d3bb-4929-8526-d3507e92a041", visualWeight: 8 },
    { artist: "The Breeders", title: "Last Splash", year: 1993, country: "US", mbid: "7aaf0618-292c-3474-bfbc-d831baf710cf", visualWeight: 8 },
    { artist: "Built to Spill", title: "Perfect from Now On", year: 1997, country: "US", mbid: "e79d22e8-bad6-4b4b-a7b1-ea62796b7eee", visualWeight: 8 },
    { artist: "Elliott Smith", title: "Either/Or", year: 1997, country: "US", mbid: "dfb85157-313b-3f5f-8739-a5162bcb6345", visualWeight: 8 },
    { artist: "Rage Against the Machine", title: "Rage Against the Machine", year: 1992, country: "US", mbid: "1305859b-8937-397f-9c33-39f62eb672fb", visualWeight: 8 },
    { artist: "PJ Harvey", title: "Rid of Me", year: 1993, country: "UK", mbid: "c1bb54cc-751d-300c-ba29-d7502d571c2d", visualWeight: 8 },
    { artist: "Primus", title: "Sailing the Seas of Cheese", year: 1991, country: "US", mbid: "a7c4f177-8de8-366f-87f4-aa851ae32012", visualWeight: 8 },
    { artist: "Faith No More", title: "The Real Thing", year: 1989, country: "US", mbid: "1ba7c980-4882-31fb-9918-12791f59d303", visualWeight: 8 },
    { artist: "Tool", title: "Ænima", year: 1996, country: "US", mbid: "ef1e8130-dd5f-336a-85fa-4936a47342bd", visualWeight: 8 },
    { artist: "Quicksand", title: "Slip", year: 1993, country: "US", mbid: "24f9fe37-18c9-3f1e-b359-64a2294211ac", visualWeight: 8 },
  ],

  // ARENA ROCK (9 albums)
  "Arena Rock": [
    { artist: "Boston", title: "Boston", year: 1976, country: "US", mbid: "f0371fc4-3e22-3d8d-8ce3-4af873ea6f1c", visualWeight: 8 },
    { artist: "Styx", title: "Paradise Theater", year: 1981, country: "US", mbid: "7f7bae53-22ac-30af-bdcc-2ad7b1c6dabd", visualWeight: 8 },
    { artist: "REO Speedwagon", title: "Hi Infidelity", year: 1980, country: "US", mbid: "89a69718-85a9-3ac6-b935-8e02ad89638b", visualWeight: 8 },
    { artist: "Asia", title: "Asia", year: 1982, country: "UK", mbid: "a29d9f47-7f6e-3bad-afe7-ad1a55ddf37c", visualWeight: 8 },
    { artist: "Journey", title: "Escape", year: 1981, country: "US", mbid: "89ed7ed6-4292-3892-b0de-c9c27005c08d", visualWeight: 8 },
    { artist: "Foreigner", title: "4", year: 1981, country: "US", mbid: "b29a37cd-e84f-435e-a671-fd7541f65c53", visualWeight: 8 },
    { artist: "Kansas", title: "Leftoverture", year: 1976, country: "US", mbid: "bfdf9b55-597b-3270-81c2-3e0f18606d0e", visualWeight: 8 },
    { artist: "Toto", title: "Toto IV", year: 1982, country: "US", mbid: "0d70d25f-a64a-3eed-8b26-13fe068a4519", visualWeight: 8 },
    { artist: "Survivor", title: "Eye of the Tiger", year: 1982, country: "US", mbid: "9554c59d-afff-3ea2-b732-19a459ea0d1b", visualWeight: 8 },
  ],

  // BLUES ROCK (8 albums)
  "Blues Rock": [
    { artist: "Cream", title: "Wheels of Fire", year: 1968, country: "UK", mbid: "d4cd45f8-9a77-3449-a23c-0167e181fb5e", visualWeight: 8 },
    { artist: "Fleetwood Mac", title: "Fleetwood Mac", year: 1968, country: "UK", mbid: "71db9dad-4ab3-48d2-bc16-4a7f9c32b10b", visualWeight: 8 },
    { artist: "ZZ Top", title: "Tres Hombres", year: 1973, country: "US", mbid: "3aee7fe4-813e-3f04-8280-8d25f066f143", visualWeight: 8 },
    { artist: "Free", title: "Fire and Water", year: 1970, country: "UK", mbid: "db60560f-daa5-3b56-b03b-ae6f23f57a5e", visualWeight: 8 },
    { artist: "Jimi Hendrix", title: "Electric Ladyland", year: 1968, country: "US", mbid: "9ecfaa13-cc55-3453-a7e5-e2f25d2fe3ad", visualWeight: 8 },
    { artist: "John Mayall", title: "Blues Breakers with Eric Clapton", year: 1966, country: "UK", mbid: "2b031a2e-9d80-3240-b065-9445fb37f00b", visualWeight: 8 },
    { artist: "Stevie Ray Vaughan", title: "Texas Flood", year: 1983, country: "US", mbid: "8d4c3819-f6cf-4724-a367-3e8b84e894ff", visualWeight: 8 },
    { artist: "Ten Years After", title: "Undead", year: 1968, country: "UK", mbid: "9cb2bcee-bb54-498c-a8b5-31ba029f64e6", visualWeight: 8 },
  ],

  // BRITPOP (27 albums)
  "Britpop": [
    { artist: "Oasis", title: "(What's the Story) Morning Glory?", year: 1995, country: "UK", mbid: "cc7e6348-cc55-31fa-aeb2-748a46a81cb3", visualWeight: 8 },
    { artist: "Pulp", title: "Different Class", year: 1995, country: "UK", mbid: "88f69eab-8f07-343b-847c-b944ad33dfcf", visualWeight: 8 },
    { artist: "Elastica", title: "Elastica", year: 1995, country: "UK", mbid: "f1cbf448-c205-3642-a4c5-6042989d8ed4", visualWeight: 8 },
    { artist: "Blur", title: "Parklife", year: 1994, country: "UK", mbid: "e7fea4c1-bfe0-3b2e-8440-960428c7f9d8", visualWeight: 8 },
    { artist: "Suede", title: "Suede", year: 1993, country: "UK", mbid: "85913ff9-f07e-34a9-85f4-eee5140a5881", visualWeight: 8 },
    { artist: "Oasis", title: "Definitely Maybe", year: 1994, country: "UK", mbid: "451dca98-c118-32e1-9244-c47ca9c3c0f9", visualWeight: 8 },
    { artist: "Blur", title: "Modern Life Is Rubbish", year: 1993, country: "UK", mbid: "e7affd78-d157-4772-a468-675fa4309c61", visualWeight: 8 },
    { artist: "Radiohead", title: "The Bends", year: 1995, country: "UK", mbid: "8ea92211-a70b-3993-9301-bb80e0d1a24a", visualWeight: 8 },
    { artist: "Pulp", title: "His 'n' Hers", year: 1994, country: "UK", mbid: "a0394996-0923-324b-a176-cc1a572cb9e4", visualWeight: 8 },
    { artist: "Supergrass", title: "I Should Coco", year: 1995, country: "UK", mbid: "6e796029-272d-3fe2-8ad0-d8a10ef80a66", visualWeight: 8 },
    { artist: "The Verve", title: "Urban Hymns", year: 1997, country: "UK", mbid: "3dd0c8e4-af53-3605-9c20-f27c7635fb60", visualWeight: 8 },
    { artist: "Ocean Colour Scene", title: "Moseley Shoals", year: 1996, country: "UK", mbid: "5c96c46c-1106-3e26-af25-b06263956a27", visualWeight: 8 },
    { artist: "Manic Street Preachers", title: "Everything Must Go", year: 1996, country: "UK", mbid: "c26969b8-13ce-3bb5-996a-eed9e21e1149", visualWeight: 8 },
    { artist: "Cast", title: "All Change", year: 1995, country: "UK", mbid: "1d26c624-44c3-4dea-9515-d3b5719e90e1", visualWeight: 8 },
    { artist: "Sleeper", title: "Smart", year: 1995, country: "UK", mbid: "653f9dfc-c150-3094-b0df-3d9251a1b9ef", visualWeight: 8 },
    { artist: "Ash", title: "1977", year: 1996, country: "UK", mbid: "2b87d240-123b-350c-a9e1-a4f6be883a99", visualWeight: 8 },
    { artist: "Shed Seven", title: "A Maximum High", year: 1996, country: "UK", mbid: "234b5360-2504-3873-b228-d431354e4f9a", visualWeight: 8 },
    { artist: "Gene", title: "Olympian", year: 1995, country: "UK", mbid: "96580183-5808-3928-9883-06fefd293daa", visualWeight: 8 },
    { artist: "Northern Uproar", title: "Northern Uproar", year: 1996, country: "UK", mbid: "35673ea5-5e2a-3ec3-8ce6-e1a711351dd5", visualWeight: 8 },
    { artist: "Echobelly", title: "Everyone's Got One", year: 1994, country: "UK", mbid: "3c3fc282-5f9b-3d71-ace8-d2d5e721e6d9", visualWeight: 8 },
    { artist: "The Charlatans", title: "Tellin' Stories", year: 1997, country: "UK", mbid: "a9f71672-e2d5-304b-a6d9-348d9fdad11c", visualWeight: 8 },
    { artist: "The Divine Comedy", title: "Casanova", year: 1996, country: "UK", mbid: "4e972fc5-f217-378e-a0ff-ea8fa32d1d5e", visualWeight: 8 },
    { artist: "Menswear", title: "Nuisance", year: 1995, country: "UK", mbid: "eede3a31-17fd-3e00-93d7-aa75a387a121", visualWeight: 8 },
    { artist: "The Boo Radleys", title: "Wake Up!", year: 1995, country: "UK", mbid: "db2ac517-51d8-3e28-8341-3a79407b58bb", visualWeight: 8 },
    { artist: "Space", title: "Spiders", year: 1996, country: "UK", mbid: "3d90b363-19ff-35d4-a934-ca04b77b6a49", visualWeight: 8 },
    { artist: "Teenage Fanclub", title: "Bandwagonesque", year: 1991, country: "UK", mbid: "4119fd8b-9858-33c9-8256-fcc1570bc07f", visualWeight: 8 },
    { artist: "Catatonia", title: "International Velvet", year: 1998, country: "UK", mbid: "aa66823e-8520-33af-a718-e5804eebbb7e", visualWeight: 8 },
  ],

  // CLASSIC ROCK (24 albums)
  "Classic Rock": [
    { artist: "Santana", title: "Abraxas", year: 1970, country: "US", mbid: "43424c73-fc58-36b0-b9cf-f8b057ac0603", visualWeight: 8 },
    { artist: "Free", title: "All Right Now", year: 1970, country: "UK", mbid: "818fbbc7-c03e-373f-8808-5ec5343ed99c", visualWeight: 8 },
    { artist: "Chicago", title: "Chicago Transit Authority", year: 1969, country: "US", mbid: "1eeb1e2c-ae11-3b2e-80fc-22233f0ca648", visualWeight: 8 },
    { artist: "Steely Dan", title: "Can't Buy a Thrill", year: 1972, country: "US", mbid: "9d73a864-2976-3286-b6c1-8aabc7407737", visualWeight: 8 },
    { artist: "The Beatles", title: "Abbey Road", year: 1969, country: "UK", mbid: "4b65927f-9611-48b2-a9da-61c72055683a", visualWeight: 8 },
    { artist: "Pink Floyd", title: "Wish You Were Here", year: 1975, country: "UK", mbid: "aec8c2eb-0639-436f-99db-9974781f241c", visualWeight: 8 },
    { artist: "Cream", title: "Fresh Cream", year: 1966, country: "UK", mbid: "38d65202-a589-38ad-bf19-6161193340ee", visualWeight: 8 },
    { artist: "Jimi Hendrix", title: "Axis: Bold as Love", year: 1967, country: "US", mbid: "d0b1e21e-cef6-4575-8d92-1afea1894ca3", visualWeight: 8 },
    { artist: "Creedence Clearwater Revival", title: "Cosmo's Factory", year: 1970, country: "US", mbid: "3a31800f-1916-3f4c-a7ae-26b783d00670", visualWeight: 8 },
    { artist: "Derek and the Dominos", title: "Layla and Other Assorted Love Songs", year: 1970, country: "UK", mbid: "ba53dcbd-9328-3cf7-bc72-179b4512867e", visualWeight: 8 },
    { artist: "The Animals", title: "The Animals", year: 1964, country: "UK", mbid: "164b6d72-512b-37f7-8288-ada5c9a976f0", visualWeight: 8 },
    { artist: "Traffic", title: "The Low Spark of High Heeled Boys", year: 1971, country: "UK", mbid: "12980c27-0af8-36eb-91a8-808b26b30a79", visualWeight: 8 },
    { artist: "Bad Company", title: "Bad Company", year: 1974, country: "UK", mbid: "1f67788b-223d-3f28-b972-7f07c9418ed0", visualWeight: 8 },
    { artist: "The Doobie Brothers", title: "Toulouse Street", year: 1972, country: "US", mbid: "c7296dbe-28d5-31b4-b3fd-7debba4afee6", visualWeight: 8 },
    { artist: "Blood Sweat & Tears", title: "Child Is Father to the Man", year: 1968, country: "US", mbid: "ff646ee2-2eb0-3cf6-8798-d60fd4e63361", visualWeight: 8 },
    { artist: "Led Zeppelin", title: "Physical Graffiti", year: 1975, country: "UK", mbid: "116c9490-6af4-3827-8261-2d5b1f508fe7", visualWeight: 8 },
    { artist: "The Rolling Stones", title: "Sticky Fingers", year: 1971, country: "UK", mbid: "4a4213d0-f224-3d51-bcca-476f61162681", visualWeight: 8 },
    { artist: "The Doors", title: "L.A. Woman", year: 1971, country: "US", mbid: "efc6910a-24d4-43b9-9972-e7310a9e0d71", visualWeight: 8 },
    { artist: "The Band", title: "Music from Big Pink", year: 1968, country: "US", mbid: "466fddac-8006-3e71-bbe7-7aa0f587aa88", visualWeight: 8 },
    { artist: "The Yardbirds", title: "Roger the Engineer", year: 1966, country: "UK", mbid: "051e7eb4-a90a-36fd-99aa-5db693ba3a07", visualWeight: 8 },
    { artist: "Procol Harum", title: "A Salty Dog", year: 1969, country: "UK", mbid: "4eebdc43-00e0-3463-b7f8-206622427feb", visualWeight: 8 },
    { artist: "Humble Pie", title: "Performance Rockin' the Fillmore", year: 1971, country: "UK", mbid: "760b789b-1321-3ef5-b7de-4c13ec0538ed", visualWeight: 8 },
    { artist: "Foghat", title: "Fool for the City", year: 1975, country: "UK", mbid: "aa1898ac-9d10-3c4f-8a5c-3375741963c3", visualWeight: 8 },
    { artist: "Lynyrd Skynyrd", title: "Second Helping", year: 1974, country: "US", mbid: "cbff20dc-1ed7-3579-9a60-c705e88bdf19", visualWeight: 8 },
  ],

  // DISCO (9 albums)
  "Disco": [
    { artist: "Donna Summer", title: "Bad Girls", year: 1979, country: "US", mbid: "ffade2ce-578c-3047-a82c-2b8cf979cc18", visualWeight: 8 },
    { artist: "Chic", title: "C'est Chic", year: 1978, country: "US", mbid: "db46b19c-0e97-30de-ba53-7e823104d14a", visualWeight: 8 },
    { artist: "Gloria Gaynor", title: "Love Tracks", year: 1978, country: "US", mbid: "73c7828a-8549-3447-96cf-777be057829e", visualWeight: 8 },
    { artist: "Earth Wind & Fire", title: "Gratitude", year: 1975, country: "US", mbid: "1e76c0b3-6f97-3e07-978a-9eea0010a4d6", visualWeight: 8 },
    { artist: "The Trammps", title: "Disco Inferno", year: 1976, country: "US", mbid: "11aae84a-4ad6-4875-af25-18874fe74bac", visualWeight: 8 },
    { artist: "Bee Gees", title: "Saturday Night Fever", year: 1977, country: "UK", mbid: "c8cf8fa2-ebaf-4b24-a12a-2dee7c1e9de9", visualWeight: 8 },
    { artist: "Sister Sledge", title: "We Are Family", year: 1979, country: "US", mbid: "acb1aa80-3ede-3a65-a862-5b0730c92607", visualWeight: 8 },
    { artist: "KC and the Sunshine Band", title: "KC and the Sunshine Band", year: 1975, country: "US", mbid: "fbcd5ce0-c2bb-378f-96a0-ea401b09d1ea", visualWeight: 8 },
    { artist: "Village People", title: "Cruisin'", year: 1978, country: "US", mbid: "598ddee4-bd79-4a79-bcd7-b3759b2a91e4", visualWeight: 8 },
  ],

  // DRUM & BASS (9 albums)
  "Drum & Bass": [
    { artist: "High Contrast", title: "True Colours", year: 2002, country: "UK", mbid: "a4af7bd7-0330-367a-af23-11905637bf48", visualWeight: 8 },
    { artist: "London Elektricity", title: "Pull the Plug", year: 1999, country: "UK", mbid: "b1b2d7a8-7e28-382f-9ce5-f8e7ce3df2f5", visualWeight: 8 },
    { artist: "Goldie", title: "Timeless", year: 1995, country: "UK", mbid: "7a752bd0-8ef8-3811-96c9-5cf53535152e", visualWeight: 8 },
    { artist: "LTJ Bukem", title: "Logical Progression", year: 1996, country: "UK", mbid: "3ae18f4d-8a99-3dd1-b9d0-7275adc3bd92", visualWeight: 8 },
    { artist: "Pendulum", title: "Hold Your Colour", year: 2005, country: "UK", mbid: "8ec197ee-a888-32d7-acb5-0fac3e95e263", visualWeight: 8 },
    { artist: "Calibre", title: "Musique Concrete", year: 2001, country: "UK", mbid: "48b8fd22-bdbf-3a94-a601-40bab6f8cb6d", visualWeight: 8 },
    { artist: "Shy FX", title: "Diary of a Digital Soundboy", year: 2009, country: "UK", mbid: "63503888-6e98-3cc7-8b4b-bd6d2318c52e", visualWeight: 8 },
    { artist: "Roni Size", title: "New Forms", year: 1997, country: "UK", mbid: "70fe8c14-6a76-33d5-a4f4-e2cb5556611f", visualWeight: 8 },
    { artist: "Photek", title: "Modus Operandi", year: 1997, country: "UK", mbid: "5d884407-1f91-42ac-abaa-ed36cb0bc965", visualWeight: 8 },
  ],

  // DUB (3 albums)
  "Dub": [
    { artist: "Lee \"Scratch\" Perry", title: "Super Ape", year: 1976, country: "UK", mbid: "a8ba965f-b79d-3cd9-94ac-0ac40408f56e", visualWeight: 8 },
    { artist: "Mad Professor", title: "Dub Me Crazy", year: 1982, country: "UK", mbid: "1c921f64-3d3c-31a8-b657-a597eed0c710", visualWeight: 8 },
    { artist: "Scientist", title: "Scientist Rids the World of the Evil Curse of the Vampires", year: 1981, country: "UK", mbid: "ea7e7cbb-73f2-3d39-b17c-584486d94c9c", visualWeight: 8 },
  ],

  // ELECTRONIC (6 albums)
  "Electronic": [
    { artist: "Yellow Magic Orchestra", title: "Yellow Magic Orchestra", year: 1978, country: "US", mbid: "e92c42f1-acc8-3ad9-8a6c-8d1593f3a9a3", visualWeight: 8 },
    { artist: "Tangerine Dream", title: "Phaedra", year: 1974, country: "UK", mbid: "866c88fa-a18b-3739-9814-2ad215e5e11a", visualWeight: 8 },
    { artist: "Jean-Michel Jarre", title: "Oxygène", year: 1976, country: "UK", mbid: "3055cd07-9b9d-34ed-b227-942ba6977174", visualWeight: 8 },
    { artist: "Giorgio Moroder", title: "From Here to Eternity", year: 1977, country: "UK", mbid: "eea2d61e-2106-32b7-8834-6cf0e50eb9ff", visualWeight: 8 },
    { artist: "Cabaret Voltaire", title: "The Voice of America", year: 1980, country: "UK", mbid: "d3d93c52-3096-3582-b788-cdc1e7fefca6", visualWeight: 8 },
    { artist: "Throbbing Gristle", title: "20 Jazz Funk Greats", year: 1979, country: "UK", mbid: "4f1038db-a822-3111-8b3e-0a13beaa027e", visualWeight: 8 },
  ],

  // EMO (10 albums)
  "Emo": [
    { artist: "My Chemical Romance", title: "The Black Parade", year: 2006, country: "US", mbid: "f1dee607-535a-31db-9b97-c7dc91ab6ab1", visualWeight: 8 },
    { artist: "Dashboard Confessional", title: "The Places You Have Come to Fear the Most", year: 2001, country: "US", mbid: "b797584c-8be6-3810-b5bc-2856d5a13cf1", visualWeight: 8 },
    { artist: "Taking Back Sunday", title: "Tell All Your Friends", year: 2002, country: "US", mbid: "ef77620a-39e5-3e9b-9c1c-f276ae31182c", visualWeight: 8 },
    { artist: "Brand New", title: "The Devil and God Are Raging Inside Me", year: 2006, country: "US", mbid: "1be8a707-2fe2-3a79-ae44-332cec741ad6", visualWeight: 8 },
    { artist: "The Used", title: "The Used", year: 2002, country: "US", mbid: "2c578537-d479-3345-a1cd-2bd424619ce7", visualWeight: 8 },
    { artist: "Fall Out Boy", title: "From Under the Cork Tree", year: 2005, country: "US", mbid: "e848562f-a802-355c-a52c-90ba6aaa91d1", visualWeight: 8 },
    { artist: "Hawthorne Heights", title: "The Silence in Black and White", year: 2004, country: "US", mbid: "68c6ea99-bbbc-31d4-95ca-3aa6e51f288e", visualWeight: 8 },
    { artist: "Jimmy Eat World", title: "Bleed American", year: 2001, country: "US", mbid: "af8acdee-6dad-3a72-af0d-a00391bb3639", visualWeight: 8 },
    { artist: "Paramore", title: "Riot!", year: 2007, country: "US", mbid: "ebd19544-9af0-317a-a2d3-f0c57ddd79f7", visualWeight: 8 },
    { artist: "Panic! at the Disco", title: "A Fever You Can't Sweat Out", year: 2005, country: "US", mbid: "4c2e4e78-6b0f-3ca1-8131-06906e5b56e9", visualWeight: 8 },
  ],

  // FOLK ROCK (8 albums)
  "Folk Rock": [
    { artist: "Simon & Garfunkel", title: "Bridge Over Troubled Water", year: 1970, country: "US", mbid: "c39f7f80-d42f-3669-9653-230f8e922083", visualWeight: 8 },
    { artist: "Joni Mitchell", title: "Blue", year: 1971, country: "US", mbid: "42d725fb-a8b7-388c-8866-3b02789af326", visualWeight: 8 },
    { artist: "Fairport Convention", title: "Liege & Lief", year: 1969, country: "UK", mbid: "3a6b89d1-ae82-3710-8e71-765405aa8a78", visualWeight: 8 },
    { artist: "Pentangle", title: "Basket of Light", year: 1969, country: "UK", mbid: "4180c3fa-faf6-3945-b7e4-7f887c7c681f", visualWeight: 8 },
    { artist: "Bob Dylan", title: "The Freewheelin' Bob Dylan", year: 1963, country: "US", mbid: "169b62aa-c3a5-3ed9-bed1-cc47c4bc51ad", visualWeight: 8 },
    { artist: "The Byrds", title: "Mr. Tambourine Man", year: 1965, country: "US", mbid: "b95f0fea-b9c7-3e27-b49f-70304c33ab6c", visualWeight: 8 },
    { artist: "Neil Young", title: "After the Gold Rush", year: 1970, country: "US", mbid: "b6a3952b-9977-351c-a80a-73e023143858", visualWeight: 8 },
    { artist: "Nick Drake", title: "Five Leaves Left", year: 1969, country: "UK", mbid: "b9c4fc17-0dc5-3aa5-b1b9-08e1446e5bea", visualWeight: 8 },
  ],

  // FUNK (10 albums)
  "Funk": [
    { artist: "Parliament", title: "Mothership Connection", year: 1975, country: "US", mbid: "cb69bfc6-a15c-34cd-b1af-76b6481bf09a", visualWeight: 8 },
    { artist: "Sly and the Family Stone", title: "There's a Riot Goin' On", year: 1971, country: "US", mbid: "d8b8448a-2634-3e92-ac86-cf55e018f825", visualWeight: 8 },
    { artist: "Earth Wind & Fire", title: "That's the Way of the World", year: 1975, country: "US", mbid: "e9845207-8ae3-36db-b0e1-2efcdb46687d", visualWeight: 8 },
    { artist: "Kool & the Gang", title: "Wild and Peaceful", year: 1973, country: "US", mbid: "db9b94e6-9771-3835-8500-f50db5430ad6", visualWeight: 8 },
    { artist: "Tower of Power", title: "Tower of Power", year: 1973, country: "US", mbid: "91f64a19-4032-3a23-8638-37296e74b4c3", visualWeight: 8 },
    { artist: "James Brown", title: "Sex Machine", year: 1970, country: "US", mbid: "84056972-11ce-3fec-a2b7-c8f243129c1c", visualWeight: 8 },
    { artist: "Funkadelic", title: "Maggot Brain", year: 1971, country: "US", mbid: "a334e612-e736-3b4f-82b4-c4dfb774983c", visualWeight: 8 },
    { artist: "Curtis Mayfield", title: "Curtis", year: 1970, country: "US", mbid: "0c24e81f-b710-3e24-a4fa-12950e153585", visualWeight: 8 },
    { artist: "Ohio Players", title: "Fire", year: 1974, country: "US", mbid: "4b1bd5bd-e3ab-3edf-bd93-7e01fae5b202", visualWeight: 8 },
    { artist: "The Meters", title: "Rejuvenation", year: 1974, country: "US", mbid: "ed25b54a-8287-375f-ae31-42c69785cec8", visualWeight: 8 },
  ],

  // GLAM ROCK (7 albums)
  "Glam Rock": [
    { artist: "T. Rex", title: "Electric Warrior", year: 1971, country: "UK", mbid: "e53310bf-8ccc-3d7f-a0b7-5ca4dbababcb", visualWeight: 8 },
    { artist: "Sweet", title: "Desolation Boulevard", year: 1974, country: "UK", mbid: "82993041-b4e7-3d33-aa84-cdd20461da53", visualWeight: 8 },
    { artist: "New York Dolls", title: "New York Dolls", year: 1973, country: "US", mbid: "4cdd4c59-e38f-382b-b01c-e69829faa69c", visualWeight: 8 },
    { artist: "David Bowie", title: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", year: 1972, country: "UK", mbid: "6c9ae3dd-32ad-472c-96be-69d0a3536261", visualWeight: 8 },
    { artist: "Roxy Music", title: "Roxy Music", year: 1972, country: "UK", mbid: "3ff6284f-88b0-3285-895a-61c733e6d4ca", visualWeight: 8 },
    { artist: "Slade", title: "Slayed?", year: 1972, country: "UK", mbid: "8455be77-292b-3699-81c4-c11dd6b9049f", visualWeight: 8 },
    { artist: "Sparks", title: "Kimono My House", year: 1974, country: "UK", mbid: "0539b843-2228-36f5-965d-f370d05f66c3", visualWeight: 8 },
  ],

  // GOTH (9 albums)
  "Goth": [
    { artist: "The Cure", title: "Disintegration", year: 1989, country: "UK", mbid: "494bf606-d2f7-36d0-8340-eadad8601d2b", visualWeight: 8 },
    { artist: "Sisters of Mercy", title: "First and Last and Always", year: 1985, country: "UK", mbid: "8dba5572-6b3d-3e31-ab32-51d1f3ed1f69", visualWeight: 8 },
    { artist: "Fields of the Nephilim", title: "Elizium", year: 1990, country: "UK", mbid: "faad1358-de5e-3da7-92b1-a5658d01f3a0", visualWeight: 8 },
    { artist: "Clan of Xymox", title: "Medusa", year: 1986, country: "UK", mbid: "9a1e189b-3537-3f4a-83c8-e078c441ed3d", visualWeight: 8 },
    { artist: "Gene Loves Jezebel", title: "Discover", year: 1986, country: "UK", mbid: "aefa4efa-c0cf-352e-b609-8b09167b3978", visualWeight: 8 },
    { artist: "Bauhaus", title: "Mask", year: 1981, country: "UK", mbid: "b9478bd5-7b9a-326e-8bdf-ad8cf8978f54", visualWeight: 8 },
    { artist: "Siouxsie and the Banshees", title: "Juju", year: 1981, country: "UK", mbid: "844bfb05-2b51-35e2-8063-1c8e6746c781", visualWeight: 8 },
    { artist: "Christian Death", title: "Only Theatre of Pain", year: 1982, country: "US", mbid: "dbde84c8-abd9-3c73-a25c-3acf60754fee", visualWeight: 8 },
    { artist: "The Damned", title: "Phantasmagoria", year: 1985, country: "UK", mbid: "5c1d3bda-4ad3-3df5-9a03-768f90f911f5", visualWeight: 8 },
  ],

  // GRUNGE (22 albums)
  "Grunge": [
    { artist: "Pearl Jam", title: "Ten", year: 1991, country: "US", mbid: "cea5d18a-1924-3cda-bebc-38933834b25d", visualWeight: 8 },
    { artist: "Alice in Chains", title: "Dirt", year: 1992, country: "US", mbid: "92d8f0c4-8c64-3bee-bee1-812a70e77efa", visualWeight: 8 },
    { artist: "Soundgarden", title: "Badmotorfinger", year: 1991, country: "US", mbid: "85766188-9484-333e-b8ae-a5cab5e5167b", visualWeight: 8 },
    { artist: "Screaming Trees", title: "Sweet Oblivion", year: 1992, country: "US", mbid: "3ed0f3e2-aef3-39c4-86e7-b1e9dc80a52c", visualWeight: 8 },
    { artist: "Temple of the Dog", title: "Temple of the Dog", year: 1991, country: "US", mbid: "b9369fce-01fc-36b2-9d67-3a7fb14a8f44", visualWeight: 8 },
    { artist: "Tad", title: "8-Way Santa", year: 1991, country: "US", mbid: "03bfdc4f-fa1e-3c45-ba09-78885696be05", visualWeight: 8 },
    { artist: "Green River", title: "Rehab Doll", year: 1988, country: "US", mbid: "784c7149-d386-4e1f-9713-605cf5966252", visualWeight: 8 },
    { artist: "Hole", title: "Live Through This", year: 1994, country: "US", mbid: "fe676d05-f97c-303a-890b-da53c69e5d42", visualWeight: 8 },
    { artist: "Truly", title: "Fast Stories...from Kid Coma", year: 1995, country: "US", mbid: "c25cd921-969f-37bc-b1af-5f11a595d0bc", visualWeight: 8 },
    { artist: "Bush", title: "Sixteen Stone", year: 1994, country: "UK", mbid: "eef2b4a3-49dc-33d7-9fbb-fb2313cd57b0", visualWeight: 8 },
    { artist: "Local H", title: "As Good as Dead", year: 1996, country: "US", mbid: "de5f7ce3-ef4f-3e73-8d3b-197dda7b5fc8", visualWeight: 8 },
    { artist: "Nirvana", title: "Nevermind", year: 1991, country: "US", mbid: "1b022e01-4da6-387b-8658-8678046e4cef", visualWeight: 8 },
    { artist: "Soundgarden", title: "Superunknown", year: 1994, country: "US", mbid: "8300fe9c-0022-3c55-8a3e-8dc61f282e8c", visualWeight: 8 },
    { artist: "Stone Temple Pilots", title: "Core", year: 1992, country: "US", mbid: "6ca130f1-8f1f-3aa2-8cfb-6cfda3ed5d21", visualWeight: 8 },
    { artist: "Mudhoney", title: "Superfuzz Bigmuff", year: 1988, country: "US", mbid: "c92a05a8-c340-39aa-a912-e2927f2b49a6", visualWeight: 8 },
    { artist: "Mad Season", title: "Above", year: 1995, country: "US", mbid: "dfd71e05-6a88-3fed-87be-a09d466766e5", visualWeight: 8 },
    { artist: "L7", title: "Bricks Are Heavy", year: 1992, country: "US", mbid: "9f7bedef-5588-3bca-8c81-06a102c4eb8d", visualWeight: 8 },
    { artist: "Mother Love Bone", title: "Apple", year: 1990, country: "US", mbid: "0df8ee07-7d17-333c-8338-2ea24aaeac88", visualWeight: 8 },
    { artist: "Melvins", title: "Houdini", year: 1993, country: "US", mbid: "76ce6e14-2938-3653-8fd9-e1f31a33deb2", visualWeight: 8 },
    { artist: "Babes in Toyland", title: "Fontanelle", year: 1992, country: "US", mbid: "effc8fd7-7dd2-3458-ac77-734fa22e54bb", visualWeight: 8 },
    { artist: "Candlebox", title: "Candlebox", year: 1993, country: "US", mbid: "7e290019-f816-3f73-b510-01f84735a6eb", visualWeight: 8 },
    { artist: "Silverchair", title: "Frogstomp", year: 1995, country: "US", mbid: "51006b33-e0b6-33c0-958c-becd513d3a4f", visualWeight: 8 },
  ],

  // HARD ROCK (24 albums)
  "Hard Rock": [
    { artist: "AC/DC", title: "Back in Black", year: 1980, country: "UK", mbid: "d3bc1a64-7561-3787-b680-0003aa50f8f1", visualWeight: 8 },
    { artist: "Led Zeppelin", title: "Led Zeppelin IV", year: 1971, country: "UK", mbid: "2e61da88-39e9-3473-81d2-c964cb394952", visualWeight: 8 },
    { artist: "Black Sabbath", title: "Paranoid", year: 1970, country: "UK", mbid: "cc053745-c447-3566-8f27-bed5438c9133", visualWeight: 8 },
    { artist: "Aerosmith", title: "Rocks", year: 1976, country: "US", mbid: "775d9a2d-effc-35c8-b80a-f9a4e4206d27", visualWeight: 8 },
    { artist: "Thin Lizzy", title: "Jailbreak", year: 1976, country: "UK", mbid: "d55dae0d-835d-3756-8805-196e41bacc2f", visualWeight: 8 },
    { artist: "UFO", title: "Lights Out", year: 1977, country: "UK", mbid: "2d2751bb-7754-30fe-9942-39823a389458", visualWeight: 8 },
    { artist: "Rainbow", title: "Rising", year: 1976, country: "UK", mbid: "66576223-2647-37df-b6c2-746fc35c1a41", visualWeight: 8 },
    { artist: "Scorpions", title: "Blackout", year: 1982, country: "UK", mbid: "b00fbf7c-ebaf-3ec0-91d6-5eaad124d58f", visualWeight: 8 },
    { artist: "Whitesnake", title: "Whitesnake", year: 1987, country: "UK", mbid: "05cb6b4f-9826-3681-a237-2174c2697c4f", visualWeight: 8 },
    { artist: "Guns N' Roses", title: "Appetite for Destruction", year: 1987, country: "US", mbid: "a0b94d0a-210b-4b15-bd1d-93be2196c14a", visualWeight: 8 },
    { artist: "Van Halen", title: "Van Halen", year: 1978, country: "US", mbid: "ed0c73b9-27b4-3263-951a-b16a01c77cc2", visualWeight: 8 },
    { artist: "Def Leppard", title: "Hysteria", year: 1987, country: "UK", mbid: "12fa3845-7c62-36e5-a8da-8be137155a72", visualWeight: 8 },
    { artist: "Mötley Crüe", title: "Shout at the Devil", year: 1983, country: "US", mbid: "1d53b31a-6fed-3dcd-860f-d49be19a0228", visualWeight: 8 },
    { artist: "Judas Priest", title: "Screaming for Vengeance", year: 1982, country: "UK", mbid: "40f3885e-7158-3154-826d-676f2b79c6fb", visualWeight: 8 },
    { artist: "Accept", title: "Balls to the Wall", year: 1983, country: "UK", mbid: "d75fdd13-5bc0-46c0-bae0-310d927ec63f", visualWeight: 8 },
    { artist: "Dio", title: "Holy Diver", year: 1983, country: "US", mbid: "e75afbe1-9a2b-45a4-9d1c-81a966a4ed43", visualWeight: 8 },
    { artist: "Blue Öyster Cult", title: "Agents of Fortune", year: 1976, country: "US", mbid: "ec282fb2-4fc7-3bee-99ab-f11c6b821b55", visualWeight: 8 },
    { artist: "Queen", title: "A Night at the Opera", year: 1975, country: "UK", mbid: "6b47c9a0-b9e1-3df9-a5e8-50a6ce0dbdbd", visualWeight: 8 },
    { artist: "Nazareth", title: "Hair of the Dog", year: 1975, country: "UK", mbid: "d3178fcf-56f6-3188-b921-f57d98876434", visualWeight: 8 },
    { artist: "Status Quo", title: "Quo", year: 1974, country: "UK", mbid: "eb061525-e9de-348e-99b1-5c533d74f6dd", visualWeight: 8 },
    { artist: "Uriah Heep", title: "Demons and Wizards", year: 1972, country: "UK", mbid: "19f95cb8-6ffc-307f-a474-369103dd1b82", visualWeight: 8 },
    { artist: "Budgie", title: "Budgie", year: 1971, country: "UK", mbid: "36232717-7e8c-4a94-8e3b-71b63c97b5df", visualWeight: 8 },
    { artist: "Mountain", title: "Climbing!", year: 1970, country: "US", mbid: "37223bd3-9b5f-362e-8d8c-c471099bb679", visualWeight: 8 },
    { artist: "Grand Funk Railroad", title: "Closer to Home", year: 1970, country: "US", mbid: "f53df5ab-437f-31d5-bdd8-fc36adb9659e", visualWeight: 8 },
  ],

  // HEAVY METAL (8 albums)
  "Heavy Metal": [
    { artist: "Iron Maiden", title: "The Number of the Beast", year: 1982, country: "UK", mbid: "4ebfe175-e7ed-34cd-8e91-67c7e4a53579", visualWeight: 8 },
    { artist: "Def Leppard", title: "Pyromania", year: 1983, country: "UK", mbid: "d77df681-b779-3d6d-b66a-3bfd15985e3e", visualWeight: 8 },
    { artist: "Saxon", title: "Wheels of Steel", year: 1980, country: "UK", mbid: "f0556704-20f0-3831-8f7a-aab0855d5865", visualWeight: 8 },
    { artist: "Motörhead", title: "Ace of Spades", year: 1980, country: "UK", mbid: "8295af95-1ffe-30ee-9c4f-e85578e4b900", visualWeight: 8 },
    { artist: "Iron Maiden", title: "Iron Maiden", year: 1980, country: "UK", mbid: "e92a6dba-cd7f-4121-b32d-364c29fb9f1b", visualWeight: 8 },
    { artist: "Diamond Head", title: "Lightning to the Nations", year: 1980, country: "UK", mbid: "4a707750-c011-4e85-af8e-fa9fb30bd0c0", visualWeight: 8 },
    { artist: "Venom", title: "Black Metal", year: 1982, country: "UK", mbid: "84df033e-49e6-30aa-8331-11e4c0e161b6", visualWeight: 8 },
    { artist: "Tygers of Pan Tang", title: "Spellbound", year: 1981, country: "UK", mbid: "dff62ea7-4315-4cba-bab3-8905099d95d4", visualWeight: 8 },
  ],

  // HOUSE/TECHNO (10 albums)
  "House/Techno": [
    { artist: "The Chemical Brothers", title: "Dig Your Own Hole", year: 1997, country: "UK", mbid: "69f4aa7f-d760-3890-bd2a-902fb9abe40b", visualWeight: 8 },
    { artist: "Underworld", title: "Dubnobasswithmyheadman", year: 1994, country: "UK", mbid: "3fa924b2-aae8-3ab6-b2d3-f647a8a8e8f6", visualWeight: 8 },
    { artist: "Orbital", title: "Orbital 2", year: 1993, country: "UK", mbid: "ce8ac428-e056-3c57-b80f-bf05c4cbc9ea", visualWeight: 8 },
    { artist: "Daft Punk", title: "Homework", year: 1997, country: "UK", mbid: "b7a7b524-e29a-4d8e-a7f5-ffbcea5a38e4", visualWeight: 8 },
    { artist: "Fatboy Slim", title: "You've Come a Long Way Baby", year: 1998, country: "UK", mbid: "435fe38e-404c-3887-8300-cc94420a121c", visualWeight: 8 },
    { artist: "Prodigy", title: "The Fat of the Land", year: 1997, country: "UK", mbid: "ac9138ce-6331-3f8d-86d7-69f13e4ab4f4", visualWeight: 8 },
    { artist: "Moby", title: "Play", year: 1999, country: "US", mbid: "e62888d6-deac-43e1-bd43-054af824d256", visualWeight: 8 },
    { artist: "LCD Soundsystem", title: "Sound of Silver", year: 2007, country: "US", mbid: "5cbcdd9f-4b7d-3b3c-b9f2-6b0e75971157", visualWeight: 8 },
    { artist: "Leftfield", title: "Leftism", year: 1995, country: "UK", mbid: "9345480c-e2d2-3cb9-9205-88c8a70e911d", visualWeight: 8 },
    { artist: "The Prodigy", title: "Music for the Jilted Generation", year: 1994, country: "UK", mbid: "f9fa083f-db00-3048-99e7-5b186672bb09", visualWeight: 8 },
  ],

  // INDIE ROCK (37 albums)
  "Indie Rock": [
    { artist: "Sonic Youth", title: "Daydream Nation", year: 1988, country: "US", mbid: "24769a99-8189-3d8c-947e-dbc8574dad5c", visualWeight: 8 },
    { artist: "Pavement", title: "Slanted and Enchanted", year: 1992, country: "US", mbid: "869f9eac-2a40-3a41-80a3-6bf2297a7cbc", visualWeight: 8 },
    { artist: "The Strokes", title: "Is This It", year: 2001, country: "US", mbid: "6d44b57a-2b9d-372a-b7c2-c670dca997d3", visualWeight: 8 },
    { artist: "Interpol", title: "Turn on the Bright Lights", year: 2002, country: "US", mbid: "e7227840-5ef2-3813-af26-15dab34e1a51", visualWeight: 8 },
    { artist: "The White Stripes", title: "White Blood Cells", year: 2001, country: "US", mbid: "c5a0411f-374e-360d-9364-3ddec3007162", visualWeight: 8 },
    { artist: "Kings of Leon", title: "Youth and Young Manhood", year: 2003, country: "US", mbid: "dd793060-5ae7-3353-8586-16c94c32171c", visualWeight: 8 },
    { artist: "Bloc Party", title: "Silent Alarm", year: 2005, country: "UK", mbid: "f3f82b80-b2c5-3151-be53-5cb5803860e0", visualWeight: 8 },
    { artist: "MGMT", title: "Oracular Spectacular", year: 2007, country: "US", mbid: "f7da2770-bf72-3dea-8904-ff6135822724", visualWeight: 8 },
    { artist: "Tame Impala", title: "Innerspeaker", year: 2010, country: "US", mbid: "0cfdeff7-4aa7-4df4-918d-88c9421cc512", visualWeight: 8 },
    { artist: "Neutral Milk Hotel", title: "In the Aeroplane Over the Sea", year: 1998, country: "US", mbid: "8f310800-045b-3e12-8268-50b3d33a2267", visualWeight: 8 },
    { artist: "The National", title: "Alligator", year: 2005, country: "US", mbid: "8bebb379-ac9e-3283-b230-a2d3deae7346", visualWeight: 8 },
    { artist: "Broken Social Scene", title: "You Forgot It in People", year: 2002, country: "US", mbid: "65731979-ad24-3497-8c8b-541be4aa2fae", visualWeight: 8 },
    { artist: "Built to Spill", title: "There's Nothing Wrong with Love", year: 1994, country: "US", mbid: "8bcfdf35-83e9-3148-b97e-3912976e7c58", visualWeight: 8 },
    { artist: "Superchunk", title: "No Pocky for Kitty", year: 1991, country: "US", mbid: "58559ff0-0db2-3f7f-847e-cc32a0070e40", visualWeight: 8 },
    { artist: "Wilco", title: "Yankee Hotel Foxtrot", year: 2002, country: "US", mbid: "95f2ba4b-2dd9-38d1-8158-a416a391489c", visualWeight: 8 },
    { artist: "The Shins", title: "Oh Inverted World", year: 2001, country: "US", mbid: "970604f0-59e8-36d0-922f-0b7459192c9b", visualWeight: 8 },
    { artist: "LCD Soundsystem", title: "LCD Soundsystem", year: 2005, country: "US", mbid: "0276770a-5f4b-3b0a-936c-69e295f3c5b9", visualWeight: 8 },
    { artist: "Grizzly Bear", title: "Veckatimest", year: 2009, country: "US", mbid: "94d5731b-1240-38f2-b232-2ad9ffa5442d", visualWeight: 8 },
    { artist: "The Smiths", title: "The Queen Is Dead", year: 1986, country: "UK", mbid: "d8dde278-482c-3cc8-a530-fea70476f3a5", visualWeight: 8 },
    { artist: "My Bloody Valentine", title: "Loveless", year: 1991, country: "UK", mbid: "cb76227e-3ac0-3002-9a10-615a5b73cc59", visualWeight: 8 },
    { artist: "Arcade Fire", title: "Funeral", year: 2004, country: "US", mbid: "05affa96-5959-32da-8d75-1c9eb985ca59", visualWeight: 8 },
    { artist: "Yeah Yeah Yeahs", title: "Fever to Tell", year: 2003, country: "US", mbid: "e8e2d824-dd32-3b24-9c7c-24619fbe86a9", visualWeight: 8 },
    { artist: "Arctic Monkeys", title: "Whatever People Say I Am That's What I'm Not", year: 2006, country: "UK", mbid: "6c9c4985-3628-3070-b956-b538f30c9bea", visualWeight: 8 },
    { artist: "Franz Ferdinand", title: "Franz Ferdinand", year: 2004, country: "UK", mbid: "d2865bd5-ed06-496d-b5c1-e05d8fcac1dc", visualWeight: 8 },
    { artist: "The Killers", title: "Hot Fuss", year: 2004, country: "US", mbid: "e8c09b4e-33ae-368b-8f70-24b4e14fb9ad", visualWeight: 8 },
    { artist: "Vampire Weekend", title: "Vampire Weekend", year: 2008, country: "US", mbid: "44878c8d-4b85-3d7b-9ed2-143b9fbb9169", visualWeight: 8 },
    { artist: "The National", title: "Boxer", year: 2007, country: "US", mbid: "9facb475-4c5f-369b-9b93-1280e6669090", visualWeight: 8 },
    { artist: "Belle and Sebastian", title: "If You're Feeling Sinister", year: 1996, country: "UK", mbid: "66be5deb-75d5-3737-9037-1c745891d3ec", visualWeight: 8 },
    { artist: "Modest Mouse", title: "The Moon & Antarctica", year: 2000, country: "US", mbid: "a8e26959-b3b2-3440-a74a-0dc06cd6310d", visualWeight: 8 },
    { artist: "Spoon", title: "Kill the Moonlight", year: 2002, country: "US", mbid: "f40ad871-3f38-38e7-a78a-3dcf01d8ded7", visualWeight: 8 },
    { artist: "Yo La Tengo", title: "I Can Hear the Heart Beating as One", year: 1997, country: "US", mbid: "901ddfef-b428-3022-a7b9-429f56513831", visualWeight: 8 },
    { artist: "Guided by Voices", title: "Alien Lanes", year: 1995, country: "US", mbid: "5cb308cd-3d5c-3682-b568-2fc374dc2ed7", visualWeight: 8 },
    { artist: "Sleater-Kinney", title: "Dig Me Out", year: 1997, country: "US", mbid: "209b45b7-8b2f-3e07-b194-efff9cde80dd", visualWeight: 8 },
    { artist: "Death Cab for Cutie", title: "Transatlanticism", year: 2003, country: "US", mbid: "f48c46e8-8178-3e74-b60f-72b677ebcb96", visualWeight: 8 },
    { artist: "Modest Mouse", title: "Good News for People Who Love Bad News", year: 2004, country: "US", mbid: "65b47520-2e58-3bc2-a755-34ff35f23ad5", visualWeight: 8 },
    { artist: "TV on the Radio", title: "Return to Cookie Mountain", year: 2006, country: "US", mbid: "3fc31d4b-442a-3cbc-872a-b2418e2b9145", visualWeight: 8 },
    { artist: "Animal Collective", title: "Merriweather Post Pavilion", year: 2009, country: "US", mbid: "b059890c-d415-3e65-aaed-52c810565922", visualWeight: 8 },
  ],

  // K-POP (5 albums)
  "K-Pop": [
    { artist: "BTS", title: "Love Yourself: Tear", year: 2018, country: "US", mbid: "bdc4aa4d-bfba-4ef1-b3b6-ffc68055877e", visualWeight: 8 },
    { artist: "EXO", title: "XOXO", year: 2013, country: "US", mbid: "054dbb3b-e753-43a7-8785-0df2c1aa3192", visualWeight: 8 },
    { artist: "Big Bang", title: "Made", year: 2016, country: "US", mbid: "6fb25773-ad5a-4fe7-a75b-5d8b6b05582a", visualWeight: 8 },
    { artist: "BLACKPINK", title: "The Album", year: 2020, country: "US", mbid: "8240b45e-5e5c-4c47-a96c-0a0d2c556c08", visualWeight: 8 },
    { artist: "Girls' Generation", title: "Girls' Generation", year: 2007, country: "US", mbid: "4fcee0b5-6ae5-4bb9-aaf3-7edee028c509", visualWeight: 8 },
  ],

  // MODERN HIP HOP (12 albums)
  "Modern Hip Hop": [
    { artist: "50 Cent", title: "Get Rich or Die Tryin'", year: 2003, country: "US", mbid: "f624ead2-e4ba-4e52-bea5-4362b1c67b14", visualWeight: 8 },
    { artist: "Jay-Z", title: "The Blueprint", year: 2001, country: "US", mbid: "11ae8c9c-27c1-3308-9761-edb87c8f54ea", visualWeight: 8 },
    { artist: "Kanye West", title: "The College Dropout", year: 2004, country: "US", mbid: "8a01217e-6947-3927-a39b-6691104694f1", visualWeight: 8 },
    { artist: "Eminem", title: "The Marshall Mathers LP", year: 2000, country: "US", mbid: "b0fa91c8-0996-38f1-ab84-797f58d7c4eb", visualWeight: 8 },
    { artist: "Lil Wayne", title: "Tha Carter III", year: 2008, country: "US", mbid: "cb688885-74b2-4e9b-a18c-6102866151f2", visualWeight: 8 },
    { artist: "T.I.", title: "King", year: 2006, country: "US", mbid: "976904b2-824e-339c-9823-f3d67c8d906c", visualWeight: 8 },
    { artist: "Nelly", title: "Country Grammar", year: 2000, country: "US", mbid: "e8bdfcb7-1817-3369-b96e-055b68612976", visualWeight: 8 },
    { artist: "Ludacris", title: "Word of Mouf", year: 2001, country: "US", mbid: "ebc3e2cf-a96a-3bb6-aa3d-282d35155518", visualWeight: 8 },
    { artist: "The Game", title: "The Documentary", year: 2005, country: "US", mbid: "59e16e18-b446-3ccf-a67f-ca447f610ed9", visualWeight: 8 },
    { artist: "Kendrick Lamar", title: "good kid m.A.A.d city", year: 2012, country: "US", mbid: "499c19c8-0dab-4824-884b-6191d145e95b", visualWeight: 8 },
    { artist: "Drake", title: "Take Care", year: 2011, country: "US", mbid: "47809021-4515-4215-beea-db3f5dfb6267", visualWeight: 8 },
    { artist: "J. Cole", title: "2014 Forest Hills Drive", year: 2014, country: "US", mbid: "5995738d-4b6f-4db6-847b-310a9dc67085", visualWeight: 8 },
  ],

  // NEO SOUL (4 albums)
  "Neo Soul": [
    { artist: "Erykah Badu", title: "Baduizm", year: 1997, country: "US", mbid: "45536412-c62c-34fc-9524-0bac1d2542c1", visualWeight: 8 },
    { artist: "Maxwell", title: "Urban Hang Suite", year: 1996, country: "US", mbid: "e8d49b88-b411-35f9-9e34-4370a9708ef2", visualWeight: 8 },
    { artist: "Musiq Soulchild", title: "Aijuswanaseing", year: 2000, country: "US", mbid: "335650be-4666-315d-b021-7f8be8ec1759", visualWeight: 8 },
    { artist: "India.Arie", title: "Acoustic Soul", year: 2001, country: "US", mbid: "347d9975-d7ab-3058-8c60-713e64340418", visualWeight: 8 },
  ],

  // NEW WAVE (18 albums)
  "New Wave": [
    { artist: "Spandau Ballet", title: "True", year: 1983, country: "UK", mbid: "60605247-c6b1-37fc-b18a-1f9dab47dd9d", visualWeight: 8 },
    { artist: "Visage", title: "Visage", year: 1980, country: "UK", mbid: "1f6d35a9-0fe4-3310-922e-e26ffaabaa1d", visualWeight: 8 },
    { artist: "Ultravox", title: "Vienna", year: 1980, country: "UK", mbid: "cd130148-b956-4bde-af35-f7c616263880", visualWeight: 8 },
    { artist: "ABC", title: "The Lexicon of Love", year: 1982, country: "UK", mbid: "5bc5e6a3-4c24-33c3-9022-4b815d0c48d5", visualWeight: 8 },
    { artist: "Depeche Mode", title: "Speak & Spell", year: 1981, country: "UK", mbid: "7a0e0366-91f4-3444-b45a-83b158004165", visualWeight: 8 },
    { artist: "Human League", title: "Dare", year: 1981, country: "UK", mbid: "e8e7999e-0b87-3298-947d-2ad22717fc27", visualWeight: 8 },
    { artist: "Soft Cell", title: "Non-Stop Erotic Cabaret", year: 1981, country: "UK", mbid: "e5bc1607-7947-3044-8558-6b4eae334c51", visualWeight: 8 },
    { artist: "Adam and the Ants", title: "Kings of the Wild Frontier", year: 1980, country: "UK", mbid: "8698397e-887c-3f78-9d95-6c6499a1daa8", visualWeight: 8 },
    { artist: "Culture Club", title: "Colour by Numbers", year: 1983, country: "UK", mbid: "00490137-fa0b-3252-90f7-42b8eea8ae14", visualWeight: 8 },
    { artist: "Blondie", title: "Parallel Lines", year: 1978, country: "US", mbid: "0c1a4d70-5926-3ae8-aa25-466fe65639fe", visualWeight: 8 },
    { artist: "The Cars", title: "The Cars", year: 1978, country: "US", mbid: "36172f3d-9b55-37f1-9fd4-0cbd2f3af0ce", visualWeight: 8 },
    { artist: "Elvis Costello", title: "This Year's Model", year: 1978, country: "UK", mbid: "5e8117f4-a87f-3732-be5f-313c7e5b308d", visualWeight: 8 },
    { artist: "Devo", title: "Q: Are We Not Men? A: We Are Devo!", year: 1978, country: "US", mbid: "60a754f9-50e1-346a-97db-925a1e2ad7e0", visualWeight: 8 },
    { artist: "The B-52's", title: "The B-52's", year: 1979, country: "US", mbid: "c3702e7c-ba43-4032-859c-7378d7414fb1", visualWeight: 8 },
    { artist: "XTC", title: "Drums and Wires", year: 1979, country: "UK", mbid: "b2b0f57f-2caf-31b4-a2b1-ad245c3c7af2", visualWeight: 8 },
    { artist: "Squeeze", title: "Cool for Cats", year: 1979, country: "UK", mbid: "101ce998-5c5f-4310-be9d-879a6b65b4ee", visualWeight: 8 },
    { artist: "The Police", title: "Outlandos d'Amour", year: 1978, country: "UK", mbid: "3d55b5a4-a81f-3b8e-8d7e-802ce1c86596", visualWeight: 8 },
    { artist: "Joe Jackson", title: "Look Sharp!", year: 1979, country: "UK", mbid: "b3232ac6-378d-34c6-aca7-6aed95ae5ad0", visualWeight: 8 },
  ],

  // POST-PUNK (24 albums)
  "Post-Punk": [
    { artist: "Joy Division", title: "Unknown Pleasures", year: 1979, country: "UK", mbid: "42352def-1aab-3000-b548-895ebd869cb6", visualWeight: 8 },
    { artist: "Joy Division", title: "Closer", year: 1980, country: "UK", mbid: "852f9715-24b3-37d5-b8a5-456f5e19b41e", visualWeight: 8 },
    { artist: "The Cure", title: "Seventeen Seconds", year: 1980, country: "UK", mbid: "7cd31244-186e-36bb-966f-fd6a90c0832c", visualWeight: 8 },
    { artist: "Siouxsie and the Banshees", title: "The Scream", year: 1978, country: "UK", mbid: "67f24412-60c9-36f3-a1dc-e48e56098802", visualWeight: 8 },
    { artist: "Wire", title: "Pink Flag", year: 1977, country: "UK", mbid: "9facb8b5-4b02-3f28-9f4a-61cb9b8fd7aa", visualWeight: 8 },
    { artist: "Gang of Four", title: "Entertainment!", year: 1979, country: "UK", mbid: "d0493944-992b-3534-9174-8320c1879837", visualWeight: 8 },
    { artist: "Public Image Ltd", title: "Metal Box", year: 1979, country: "UK", mbid: "57209d3f-f3ef-34db-82a7-ad633497b784", visualWeight: 8 },
    { artist: "Bauhaus", title: "In the Flat Field", year: 1980, country: "UK", mbid: "0fc9f4c7-ee00-39ec-a767-4574823c2064", visualWeight: 8 },
    { artist: "The Fall", title: "Hex Enduction Hour", year: 1982, country: "UK", mbid: "71d6b717-75e8-373c-a482-32c58c241b35", visualWeight: 8 },
    { artist: "Magazine", title: "Real Life", year: 1978, country: "UK", mbid: "5ef7ef5c-f9aa-3800-9f55-ec58130846ba", visualWeight: 8 },
    { artist: "Cabaret Voltaire", title: "Red Mecca", year: 1981, country: "UK", mbid: "ae8fc649-9fa5-3b97-a3ef-ead906f1ed74", visualWeight: 8 },
    { artist: "New Order", title: "Power, Corruption & Lies", year: 1983, country: "UK", mbid: "16cc9dfc-594d-3fb9-b789-3e1bfcb6f9f8", visualWeight: 8 },
    { artist: "Wire", title: "Chairs Missing", year: 1978, country: "UK", mbid: "3e60a576-5bd0-3028-a0db-558c4a9845c7", visualWeight: 8 },
    { artist: "Echo & the Bunnymen", title: "Crocodiles", year: 1980, country: "UK", mbid: "94b22dcb-4761-3655-975a-1a226e00a9c8", visualWeight: 8 },
    { artist: "The Chameleons", title: "Script of the Bridge", year: 1983, country: "UK", mbid: "800508e1-5174-3f58-9fb5-35f469b677ed", visualWeight: 8 },
    { artist: "Psychedelic Furs", title: "The Psychedelic Furs", year: 1980, country: "UK", mbid: "74fdc8c2-2f15-31ac-989a-5848ec9a9e37", visualWeight: 8 },
    { artist: "The Sound", title: "Jeopardy", year: 1980, country: "UK", mbid: "ae0f7b78-3dce-3157-8dd5-a82251dcf8ef", visualWeight: 8 },
    { artist: "A Certain Ratio", title: "To Each...", year: 1981, country: "UK", mbid: "56199b82-0445-3f0d-a0b7-939d26644f60", visualWeight: 8 },
    { artist: "The Smiths", title: "The Smiths", year: 1984, country: "UK", mbid: "91811b68-aa6e-35b3-a5e1-6a2733eb6ae9", visualWeight: 8 },
    { artist: "Siouxsie and the Banshees", title: "Kaleidoscope", year: 1980, country: "UK", mbid: "179b14ab-25c6-3b3b-bb03-1e894e475a1d", visualWeight: 8 },
    { artist: "Talking Heads", title: "Remain in Light", year: 1980, country: "US", mbid: "f6b1b900-6108-32f0-abbd-2855af9151eb", visualWeight: 8 },
    { artist: "Killing Joke", title: "Killing Joke", year: 1980, country: "UK", mbid: "30a8c233-66ab-3ceb-87e2-bda76f4164ca", visualWeight: 8 },
    { artist: "Josef K", title: "The Only Fun in Town", year: 1981, country: "UK", mbid: "57fc5452-f919-3ccd-afd1-06a3100620f3", visualWeight: 8 },
    { artist: "Dif Juz", title: "Extractions", year: 1985, country: "UK", mbid: "5da759c4-8f5f-33a8-8689-5ded12f0bb3b", visualWeight: 8 },
  ],

  // PROG ROCK (10 albums)
  "Prog Rock": [
    { artist: "Yes", title: "Close to the Edge", year: 1972, country: "UK", mbid: "5a59b948-1961-32ff-80d9-e970c7d4ebe9", visualWeight: 8 },
    { artist: "King Crimson", title: "In the Court of the Crimson King", year: 1969, country: "UK", mbid: "5b645d87-bacf-4f25-85b3-bcb9fc9d8dc4", visualWeight: 8 },
    { artist: "Jethro Tull", title: "Thick as a Brick", year: 1972, country: "UK", mbid: "13081627-5418-300c-af24-f65875ab61b7", visualWeight: 8 },
    { artist: "Van Der Graaf Generator", title: "Pawn Hearts", year: 1971, country: "UK", mbid: "d5afa3d7-a3b6-3b95-a812-8416dd292b9b", visualWeight: 8 },
    { artist: "Camel", title: "The Snow Goose", year: 1975, country: "UK", mbid: "d514655c-4942-4f19-81f9-72dd37dd801f", visualWeight: 8 },
    { artist: "Pink Floyd", title: "The Dark Side of the Moon", year: 1973, country: "UK", mbid: "fc851e0c-0261-472b-847c-a0cf8fedf80f", visualWeight: 8 },
    { artist: "Genesis", title: "Selling England by the Pound", year: 1973, country: "UK", mbid: "1fadec3d-7451-32e8-9194-ad7e5312cb9b", visualWeight: 8 },
    { artist: "Emerson Lake & Palmer", title: "Brain Salad Surgery", year: 1973, country: "UK", mbid: "94e2aefb-d3f8-37bd-8412-130b158ab40b", visualWeight: 8 },
    { artist: "Rush", title: "2112", year: 1976, country: "US", mbid: "9243ac59-9390-37e1-abee-fcf31fb8035f", visualWeight: 8 },
    { artist: "Gentle Giant", title: "Octopus", year: 1972, country: "UK", mbid: "11d1c7a9-87d1-3f3f-90eb-8e0edb636085", visualWeight: 8 },
  ],

  // PSYCHEDELIC ROCK (9 albums)
  "Psychedelic Rock": [
    { artist: "Pink Floyd", title: "The Piper at the Gates of Dawn", year: 1967, country: "UK", mbid: "6792b6d1-4e65-3c3c-9d20-d08aa1dcfc60", visualWeight: 8 },
    { artist: "Jefferson Airplane", title: "Surrealistic Pillow", year: 1967, country: "US", mbid: "e6440cd2-5e8e-367d-bc49-cc042b5ef524", visualWeight: 8 },
    { artist: "The Beatles", title: "Sgt. Pepper's Lonely Hearts Club Band", year: 1967, country: "UK", mbid: "cfd2ffc9-757a-44fc-94e1-39cf93ab86e0", visualWeight: 8 },
    { artist: "The Jimi Hendrix Experience", title: "Are You Experienced", year: 1967, country: "US", mbid: "791fdbb8-b19c-4d33-9ba4-d2d2f35abec6", visualWeight: 8 },
    { artist: "The Doors", title: "Strange Days", year: 1967, country: "US", mbid: "9b1acd78-3d19-37bb-8ca0-5816d44da439", visualWeight: 8 },
    { artist: "Love", title: "Forever Changes", year: 1967, country: "US", mbid: "c7035bc6-6101-326f-992c-401d451c1716", visualWeight: 8 },
    { artist: "13th Floor Elevators", title: "The Psychedelic Sounds of the 13th Floor Elevators", year: 1966, country: "US", mbid: "6577ce2b-1be3-4ed0-92c6-f78175280bae", visualWeight: 8 },
    { artist: "Big Brother and the Holding Company", title: "Cheap Thrills", year: 1968, country: "US", mbid: "02de8887-e93b-3ea6-8b6d-de072a159bba", visualWeight: 8 },
    { artist: "The Zombies", title: "Odessey and Oracle", year: 1968, country: "UK", mbid: "9a4a9ebf-f4f7-3dba-9b80-0b274cbc80f9", visualWeight: 8 },
  ],

  // R&B (13 albums)
  "R&B": [
    { artist: "Stevie Wonder", title: "Songs in the Key of Life", year: 1976, country: "US", mbid: "ea88b09b-fd34-33cf-a3e5-25a3a2fb4c6f", visualWeight: 8 },
    { artist: "Al Green", title: "Let's Stay Together", year: 1972, country: "US", mbid: "eed9ffe2-5731-3b9a-9906-01728a083d1d", visualWeight: 8 },
    { artist: "Curtis Mayfield", title: "Super Fly", year: 1972, country: "US", mbid: "08eefe50-665d-4a91-96d3-707cbd1016a7", visualWeight: 8 },
    { artist: "Aretha Franklin", title: "I Never Loved a Man the Way I Love You", year: 1967, country: "US", mbid: "7d8f07a7-4c64-3afb-8daf-8f1d4df89a78", visualWeight: 8 },
    { artist: "James Brown", title: "Live at the Apollo", year: 1963, country: "US", mbid: "ab210390-9408-3410-91d5-f14c1061c99d", visualWeight: 8 },
    { artist: "The Temptations", title: "Cloud Nine", year: 1969, country: "US", mbid: "e6c7e050-119b-3c99-92f6-039137c4a18d", visualWeight: 8 },
    { artist: "Sly and the Family Stone", title: "Stand!", year: 1969, country: "US", mbid: "bf413a18-f7cb-4aa4-94a0-42addebb8eb7", visualWeight: 8 },
    { artist: "Isaac Hayes", title: "Hot Buttered Soul", year: 1969, country: "US", mbid: "e76d4f75-f09b-3f5b-aca9-44ac4489e58d", visualWeight: 8 },
    { artist: "Maxwell", title: "BLACKsummers'night", year: 2009, country: "US", mbid: "fb6e326d-6b56-44cc-b29e-9d06dd8b049b", visualWeight: 8 },
    { artist: "Alicia Keys", title: "Songs in A Minor", year: 2001, country: "US", mbid: "5701e04b-efc2-3429-b8af-c6596f1d08cf", visualWeight: 8 },
    { artist: "John Legend", title: "Get Lifted", year: 2004, country: "US", mbid: "fa6e1004-d4f8-3a12-9cdd-2c0ec0c7ea41", visualWeight: 8 },
    { artist: "Anthony Hamilton", title: "Comin' from Where I'm From", year: 2003, country: "US", mbid: "0459e00a-f6a5-3d3d-8697-e66bf7cb1ce8", visualWeight: 8 },
    { artist: "Raphael Saadiq", title: "Instant Vintage", year: 2002, country: "US", mbid: "5b79dafe-512e-3898-85d2-45a7d77f903b", visualWeight: 8 },
  ],

  // ROCK AND ROLL (9 albums)
  "Rock and Roll": [
    { artist: "Chuck Berry", title: "After School Session", year: 1957, country: "US", mbid: "5afd7290-cd77-3a52-afac-01043240db5a", visualWeight: 8 },
    { artist: "Elvis Presley", title: "Elvis Presley", year: 1956, country: "US", mbid: "755ec54b-8632-4930-930d-0aaab9e55904", visualWeight: 8 },
    { artist: "Jerry Lee Lewis", title: "Jerry Lee Lewis", year: 1958, country: "US", mbid: "f8b70cea-fe9c-44bd-b353-06fbc756cf1a", visualWeight: 8 },
    { artist: "The Beach Boys", title: "Pet Sounds", year: 1966, country: "US", mbid: "fdd96703-7b21-365e-bdea-38029fbeb84e", visualWeight: 8 },
    { artist: "The Who", title: "My Generation", year: 1965, country: "UK", mbid: "b2e77472-77ba-4371-9374-df2ce87d9a90", visualWeight: 8 },
    { artist: "Little Richard", title: "Here's Little Richard", year: 1957, country: "US", mbid: "a987042b-4fe0-35bb-9cca-7ff44b1ff5b4", visualWeight: 8 },
    { artist: "Buddy Holly", title: "The \"Chirping\" Crickets", year: 1957, country: "US", mbid: "85d4fadd-d777-455b-bd1d-215b0b803f92", visualWeight: 8 },
    { artist: "The Beatles", title: "Rubber Soul", year: 1965, country: "UK", mbid: "dca03435-8adb-30a5-ba82-5a162267ff38", visualWeight: 8 },
    { artist: "The Kinks", title: "The Kinks Are the Village Green Preservation Society", year: 1968, country: "UK", mbid: "4516a30e-939c-3b2b-a8ea-f94ae418d3a6", visualWeight: 8 },
  ],

  // ROCKABILLY (4 albums)
  "Rockabilly": [
    { artist: "Eddie Cochran", title: "Singin' to My Baby", year: 1957, country: "US", mbid: "25bf4054-cd06-364f-b0da-c2bb3ee671a4", visualWeight: 8 },
    { artist: "Gene Vincent", title: "Bluejean Bop!", year: 1956, country: "US", mbid: "346c63f8-d285-41fb-874c-e88806ccaa18", visualWeight: 8 },
    { artist: "Carl Perkins", title: "Dance Album of Carl Perkins", year: 1957, country: "US", mbid: "489cdeb7-5104-4316-9b7a-14b044af6839", visualWeight: 8 },
    { artist: "Johnny Burnette", title: "Johnny Burnette and the Rock 'n Roll Trio", year: 1956, country: "US", mbid: "acefe431-8b9b-3524-8487-87b46210ec0c", visualWeight: 8 },
  ],

  // SKA/REGGAE (10 albums)
  "Ska/Reggae": [
    { artist: "Bob Marley & The Wailers", title: "Exodus", year: 1977, country: "UK", mbid: "87164686-938c-30d5-accc-c50957735686", visualWeight: 8 },
    { artist: "The Wailers", title: "Catch a Fire", year: 1973, country: "UK", mbid: "63a3ac2f-5d63-3132-98d3-b00385d9a3a2", visualWeight: 8 },
    { artist: "Peter Tosh", title: "Legalize It", year: 1976, country: "UK", mbid: "3f4929bc-c88d-3f41-910b-5c1c308da8f2", visualWeight: 8 },
    { artist: "Burning Spear", title: "Marcus Garvey", year: 1975, country: "UK", mbid: "2b649670-7d2d-3287-9b40-5b88fb4e1f35", visualWeight: 8 },
    { artist: "Toots and the Maytals", title: "Funky Kingston", year: 1973, country: "UK", mbid: "dc7f2fc9-19ff-33e9-aa0d-3c81f91ca633", visualWeight: 8 },
    { artist: "Jimmy Cliff", title: "The Harder They Come", year: 1972, country: "UK", mbid: "adb7b973-ccc7-3fa0-b038-09e19b05d4fe", visualWeight: 8 },
    { artist: "Black Uhuru", title: "Red", year: 1981, country: "UK", mbid: "8b23e15c-c1bf-38c6-94d8-0208da2a6519", visualWeight: 8 },
    { artist: "Steel Pulse", title: "Handsworth Revolution", year: 1978, country: "UK", mbid: "71a5c303-17e7-3cb6-a3ee-539f23104e22", visualWeight: 8 },
    { artist: "The Specials", title: "The Specials", year: 1979, country: "UK", mbid: "9c02ca99-df9a-3e48-8b7a-fabb599d19a3", visualWeight: 8 },
    { artist: "Madness", title: "One Step Beyond...", year: 1979, country: "UK", mbid: "f1e1b952-ec8d-363a-bd63-4c72d248cb51", visualWeight: 8 },
  ],

  // SOUL (9 albums)
  "Soul": [
    { artist: "Otis Redding", title: "The Dock of the Bay", year: 1968, country: "US", mbid: "4f830db1-c8f5-4829-8c55-ebfbcdb21266", visualWeight: 8 },
    { artist: "Wilson Pickett", title: "The Exciting Wilson Pickett", year: 1966, country: "US", mbid: "5ff29756-3878-388c-a4ab-add12b24fb89", visualWeight: 8 },
    { artist: "Solomon Burke", title: "Rock 'n' Soul", year: 1964, country: "US", mbid: "57e22d34-0274-38f4-8036-6f98cb5a32d4", visualWeight: 8 },
    { artist: "The Temptations", title: "My Girl", year: 1965, country: "US", mbid: "37e7862d-b885-4025-9ff5-2f3f95e8ab00", visualWeight: 8 },
    { artist: "The Four Tops", title: "Reach Out", year: 1967, country: "US", mbid: "33e4aabd-e964-48b8-a446-a61664835de3", visualWeight: 8 },
    { artist: "Gladys Knight & the Pips", title: "Midnight Train to Georgia", year: 1973, country: "US", mbid: "6210c95f-72b7-457d-9231-2fe4cc7df573", visualWeight: 8 },
    { artist: "Jackie Wilson", title: "Higher and Higher", year: 1967, country: "US", mbid: "e52b2928-3e29-329b-bd53-a47e8b74db97", visualWeight: 8 },
    { artist: "Etta James", title: "At Last!", year: 1961, country: "US", mbid: "cf89d39e-350a-3ac7-bfb5-445325aa6de2", visualWeight: 8 },
    { artist: "Ray Charles", title: "Modern Sounds in Country and Western Music", year: 1962, country: "US", mbid: "38671d62-32bd-399d-abbd-0f685c2fd4a3", visualWeight: 8 },
  ],

  // SOUTHERN ROCK (4 albums)
  "Southern Rock": [
    { artist: "Lynyrd Skynyrd", title: "Pronounced Leh-nerd Skin-nerd", year: 1973, country: "US", mbid: "33446893-8c9f-30b6-aa73-d719df371430", visualWeight: 8 },
    { artist: "The Allman Brothers Band", title: "Eat a Peach", year: 1972, country: "US", mbid: "0b1189ad-0bdf-34bc-89e4-ff05133ec51b", visualWeight: 8 },
    { artist: "Molly Hatchet", title: "Molly Hatchet", year: 1978, country: "US", mbid: "bd6d88d5-c959-38aa-92e2-cbffd469a049", visualWeight: 8 },
    { artist: "38 Special", title: "Wild-Eyed Southern Boys", year: 1981, country: "US", mbid: "53934f30-6695-33c3-81a7-80f6c024ff78", visualWeight: 8 },
  ],

  // SYNTH POP (19 albums)
  "Synth Pop": [
    { artist: "Depeche Mode", title: "Violator", year: 1990, country: "UK", mbid: "71f1482e-e63f-3b2c-811b-939f62708f2a", visualWeight: 8 },
    { artist: "Pet Shop Boys", title: "Actually", year: 1987, country: "UK", mbid: "6de9a233-13dd-30b5-ad30-61c5814774c5", visualWeight: 8 },
    { artist: "Erasure", title: "The Innocents", year: 1988, country: "UK", mbid: "7739a5e3-4616-3e08-a8d5-d1da69e86da5", visualWeight: 8 },
    { artist: "Kraftwerk", title: "Trans-Europe Express", year: 1977, country: "UK", mbid: "0e2b636a-3813-476e-898d-d027218e05d2", visualWeight: 8 },
    { artist: "Yazoo", title: "Upstairs at Eric's", year: 1982, country: "UK", mbid: "ca189e76-5704-3097-8dad-b6e1923bc917", visualWeight: 8 },
    { artist: "Tears for Fears", title: "Songs from the Big Chair", year: 1985, country: "UK", mbid: "475946e9-4b00-3f7c-9bd7-c11f55740262", visualWeight: 8 },
    { artist: "A Flock of Seagulls", title: "A Flock of Seagulls", year: 1982, country: "UK", mbid: "a9b43e9d-f452-35cb-a6da-de85ebe285ae", visualWeight: 8 },
    { artist: "Depeche Mode", title: "Music for the Masses", year: 1987, country: "UK", mbid: "e59021bd-1710-3c13-9449-b78560039592", visualWeight: 8 },
    { artist: "Heaven 17", title: "Penthouse and Pavement", year: 1981, country: "UK", mbid: "1353ea6d-1ec7-3171-9fe0-8a4199d74165", visualWeight: 8 },
    { artist: "Visage", title: "The Anvil", year: 1982, country: "UK", mbid: "ec5e8871-339f-34cd-aada-4fb461fd1d72", visualWeight: 8 },
    { artist: "Thompson Twins", title: "Into the Gap", year: 1984, country: "UK", mbid: "7f3d16ae-b3b3-42c7-94a5-9a2b32f27883", visualWeight: 8 },
    { artist: "New Order", title: "Technique", year: 1989, country: "UK", mbid: "a0902fc4-e3d9-3b2b-bc94-cd4d0e59db29", visualWeight: 8 },
    { artist: "Gary Numan", title: "The Pleasure Principle", year: 1979, country: "UK", mbid: "2ba66802-18a7-3bf4-958c-db871a6e7f34", visualWeight: 8 },
    { artist: "Eurythmics", title: "Sweet Dreams (Are Made of This)", year: 1983, country: "UK", mbid: "b969f851-b5cf-3a3f-9bfe-1280eb271406", visualWeight: 8 },
    { artist: "The Human League", title: "Reproduction", year: 1979, country: "UK", mbid: "1d41c0ad-ceb4-39bc-9885-4bb3c9cc27af", visualWeight: 8 },
    { artist: "Soft Cell", title: "The Art of Falling Apart", year: 1983, country: "UK", mbid: "c27e9077-55ce-3d54-b01f-79d0ca99fe7d", visualWeight: 8 },
    { artist: "Orchestral Manoeuvres in the Dark", title: "Dazzle Ships", year: 1983, country: "UK", mbid: "6f6d511c-103a-3861-ad75-2f716cc6ff31", visualWeight: 8 },
    { artist: "Bronski Beat", title: "The Age of Consent", year: 1984, country: "UK", mbid: "00a48312-d0c0-3bee-8818-6d1b836b52e0", visualWeight: 8 },
    { artist: "Duran Duran", title: "Duran Duran", year: 1981, country: "UK", mbid: "c5be9f5c-4c9e-3d74-a4a6-a225d03ffcf4", visualWeight: 8 },
  ],

  // TRIP-HOP (10 albums)
  "Trip-Hop": [
    { artist: "Massive Attack", title: "Blue Lines", year: 1991, country: "UK", mbid: "8b6f133a-2fdf-3cc2-b84d-1c889adc0939", visualWeight: 8 },
    { artist: "Portishead", title: "Portishead", year: 1997, country: "UK", mbid: "7685a5d0-3dac-40c7-b26d-544636129979", visualWeight: 8 },
    { artist: "Morcheeba", title: "Who Can You Trust?", year: 1996, country: "UK", mbid: "f571ba0f-7b96-3607-8b46-a5a60e93f5a5", visualWeight: 8 },
    { artist: "DJ Shadow", title: "Endtroducing.....", year: 1996, country: "US", mbid: "31ab039c-2155-4b39-813e-098f67752958", visualWeight: 8 },
    { artist: "Sneaker Pimps", title: "Becoming X", year: 1996, country: "UK", mbid: "62c14bd1-2a53-3a69-9b68-c3df4bc61032", visualWeight: 8 },
    { artist: "Portishead", title: "Dummy", year: 1994, country: "UK", mbid: "48140466-cff6-3222-bd55-63c27e43190d", visualWeight: 8 },
    { artist: "Tricky", title: "Maxinquaye", year: 1995, country: "UK", mbid: "9fd2415f-182f-39c1-aa02-5acb36f99bef", visualWeight: 8 },
    { artist: "Massive Attack", title: "Protection", year: 1994, country: "UK", mbid: "ded46e46-788d-3c1f-b21b-9f5e9c37b1bc", visualWeight: 8 },
    { artist: "Massive Attack", title: "Mezzanine", year: 1998, country: "UK", mbid: "6f9f6899-c0d3-311d-ae87-a10ae6bc53a9", visualWeight: 8 },
    { artist: "Thievery Corporation", title: "Sounds from the Thievery Hi-Fi", year: 1997, country: "US", mbid: "58d91845-3734-344b-ba10-fcae524f22c1", visualWeight: 8 },
  ],

  // UK PUNK (17 albums)
  "UK Punk": [
    { artist: "The Clash", title: "London Calling", year: 1979, country: "UK", mbid: "68cd609c-112c-3240-b6e4-9daa51e1f0a7", visualWeight: 8 },
    { artist: "Buzzcocks", title: "Singles Going Steady", year: 1979, country: "UK", mbid: "6a537b72-0bd3-38c5-8aa1-0527e6e9a2f3", visualWeight: 8 },
    { artist: "The Stranglers", title: "Rattus Norvegicus", year: 1977, country: "UK", mbid: "69cc7d7d-4405-3f65-b4e7-e35f216f6191", visualWeight: 8 },
    { artist: "The Adverts", title: "Crossing the Red Sea with The Adverts", year: 1978, country: "UK", mbid: "7f32f3a7-2b4d-357d-a722-6943880ace45", visualWeight: 8 },
    { artist: "The Jam", title: "In the City", year: 1977, country: "UK", mbid: "fbb13d32-7bd1-4b65-b932-80d73a3eeeb3", visualWeight: 8 },
    { artist: "999", title: "999", year: 1978, country: "UK", mbid: "2a0f4535-e7bc-4f63-88c4-eb2fb0da6044", visualWeight: 8 },
    { artist: "Eddie and the Hot Rods", title: "Teenage Depression", year: 1976, country: "UK", mbid: "f65ef414-20fa-4fa2-bed2-237f1858e5f1", visualWeight: 8 },
    { artist: "The Ruts", title: "The Crack", year: 1979, country: "UK", mbid: "b8fb801b-21ea-3a0b-993f-f2787cde1d2e", visualWeight: 8 },
    { artist: "Sex Pistols", title: "Never Mind the Bollocks Here's the Sex Pistols", year: 1977, country: "UK", mbid: "e959a4b3-6306-3c45-9df6-e7241dae9ea3", visualWeight: 8 },
    { artist: "The Damned", title: "Damned Damned Damned", year: 1977, country: "UK", mbid: "3ed0e51d-62a4-3957-ab42-579c6f8c148b", visualWeight: 8 },
    { artist: "X-Ray Spex", title: "Germfree Adolescents", year: 1978, country: "UK", mbid: "a7703866-4d3f-33b4-b2c8-52b4f7ddd1a4", visualWeight: 8 },
    { artist: "Generation X", title: "Generation X", year: 1978, country: "UK", mbid: "ef82c694-53bf-3b79-af75-434b50c4a0f8", visualWeight: 8 },
    { artist: "The Clash", title: "The Clash", year: 1977, country: "UK", mbid: "707518d4-db86-39af-bce5-7b149191e8b5", visualWeight: 8 },
    { artist: "The Undertones", title: "The Undertones", year: 1979, country: "UK", mbid: "d462b990-66d5-3c6b-bc67-4f3d152cdc45", visualWeight: 8 },
    { artist: "The Rezillos", title: "Can't Stand the Rezillos", year: 1978, country: "UK", mbid: "112d3443-f545-3489-a73a-e1fe61c71694", visualWeight: 8 },
    { artist: "Stiff Little Fingers", title: "Inflammable Material", year: 1979, country: "UK", mbid: "a4e97980-2b8b-3f87-8424-a35863623d88", visualWeight: 8 },
    { artist: "UK Subs", title: "Another Kind of Blues", year: 1979, country: "UK", mbid: "440c26d9-b3fb-3a94-80bd-b1486f140bdb", visualWeight: 8 },
  ],

  // US PUNK (13 albums)
  "US Punk": [
    { artist: "Dead Kennedys", title: "Fresh Fruit for Rotting Vegetables", year: 1980, country: "US", mbid: "3495fca0-ce60-3342-93f2-23fd525d8069", visualWeight: 8 },
    { artist: "Minor Threat", title: "Out of Step", year: 1983, country: "US", mbid: "db4d417f-8295-3843-829d-2b8c0b649517", visualWeight: 8 },
    { artist: "Circle Jerks", title: "Group Sex", year: 1980, country: "US", mbid: "8f5c4731-688f-3612-b5fe-318842359579", visualWeight: 8 },
    { artist: "Descendents", title: "Milo Goes to College", year: 1982, country: "US", mbid: "6f180553-2c6a-3529-a380-636f1232313d", visualWeight: 8 },
    { artist: "Television", title: "Marquee Moon", year: 1977, country: "US", mbid: "2b9f99d8-becf-3fc3-86a6-2bdd4cef93fe", visualWeight: 8 },
    { artist: "Richard Hell & The Voidoids", title: "Blank Generation", year: 1977, country: "US", mbid: "d0a52f62-e66d-34a0-9ff1-c4fce47f517f", visualWeight: 8 },
    { artist: "X", title: "Los Angeles", year: 1980, country: "US", mbid: "700da083-bd95-3301-91f1-af571a001414", visualWeight: 8 },
    { artist: "Black Flag", title: "Damaged", year: 1981, country: "US", mbid: "2cf40300-0f67-3136-9b84-57104f1f7a50", visualWeight: 8 },
    { artist: "Bad Brains", title: "Bad Brains", year: 1982, country: "US", mbid: "458f4bdf-ffbe-3643-977a-73e80d3d7b08", visualWeight: 8 },
    { artist: "Hüsker Dü", title: "Zen Arcade", year: 1984, country: "US", mbid: "ce6f4b2d-a51a-35ac-992f-3657e7c531d5", visualWeight: 8 },
    { artist: "Social Distortion", title: "Social Distortion", year: 1990, country: "US", mbid: "c4a2af67-1561-3b1b-ba7f-85515f1f9ef7", visualWeight: 8 },
    { artist: "Talking Heads", title: "Talking Heads: 77", year: 1977, country: "US", mbid: "d99084ee-de04-3ba1-8203-5f1a7e5355ee", visualWeight: 8 },
    { artist: "The Dictators", title: "Go Girl Crazy!", year: 1975, country: "US", mbid: "0fbf007d-981a-3455-85ec-e53a67cbfa4f", visualWeight: 8 },
  ],

};

// Get seed albums for a genre
export function getSeedAlbums(genre: string): SeedAlbum[] {
  return SEED_ALBUMS[genre] || [];
}

// Get seed albums filtered by region
export function getSeedAlbumsByRegion(genre: string, region: "UK" | "US"): SeedAlbum[] {
  const albums = getSeedAlbums(genre);
  return albums.filter(a => a.country === region);
}

// Select albums by difficulty (visual weight)
export function selectSeedAlbumsByDifficulty(albums: SeedAlbum[], count: number): SeedAlbum[] {
  if (albums.length <= count) return albums;
  
  // Sort by visual weight (lower = easier, higher = harder)
  const sorted = [...albums].sort((a, b) => a.visualWeight - b.visualWeight);
  
  // Distribute evenly across difficulty range
  const selected: SeedAlbum[] = [];
  const step = Math.floor(sorted.length / count);
  
  for (let i = 0; i < count; i++) {
    const index = Math.min(i * step, sorted.length - 1);
    selected.push(sorted[index]);
  }
  
  return selected;
}
