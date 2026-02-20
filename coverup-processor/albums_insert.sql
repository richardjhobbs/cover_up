-- Cover Up - Album Data Import
-- Generated: 2026-02-12T00:46:53.429Z
-- Source: master_list CSV + MusicBrainz

-- Insert albums (using MusicBrainz data)

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9162580e-5df4-32de-80cc-f45a8d8a9b1d', 'The Beatles', 'Abbey Road', 1969, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/31765b9f-e969-4257-855f-c7ea1f657b2a/39706767821-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f5093c06-23e3-404f-aeaa-40f72885ee3a', 'Pink Floyd', 'The Dark Side of the Moon', 1973, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/956fbc58-362d-43b8-b880-3779e0508559/34025419985-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2e61da88-39e9-3473-81d2-c964cb394952', 'Led Zeppelin', '[Led Zeppelin IV]', 1971, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/c66df7b9-c773-4d7c-9a21-7d3f2518dd29/22086503396-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4838a3c9-fd2b-30a5-83eb-e32545b5d7fc', 'The Rolling Stones', 'Exile on Main St.', 1972, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/d561e006-3d45-45ea-b34f-1a2a06e5cb0d/11291576233-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1b022e01-4da6-387b-8658-8678046e4cef', 'Nirvana', 'Nevermind', 1991, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/c771f7fc-9e62-4349-a2e3-ceaf7122bf5b/30501372565-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '39b22944-7503-3937-8bba-09b17281cc6a', 'Bruce Springsteen', 'Born to Run', 1975, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/7606de2e-a51f-4cc3-bd3c-1b475b4e1b16/27066375782-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '416bb5e5-c7d1-3977-8fd7-7c9daf6c2be6', 'Fleetwood Mac', 'Rumours', 1977, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/7699b503-6a69-4920-91ac-8ee8aa1c1622/7946930592-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd9797f23-a517-498c-be57-960d656a633f', 'Eagles', 'Hotel California', 1976, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/b934e019-9426-4091-a1c4-6b7590dc6c47/32975460402-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd3bc1a64-7561-3787-b680-0003aa50f8f1', 'AC/DC', 'Back in Black', 1980, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/38914b29-7788-4cff-80b7-1ced523f8675/11333065513-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6f3e9fa6-be7a-3de8-a2b2-2072ece8a54d', 'U2', 'The Joshua Tree', 1987, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/5853f9e0-f0f3-4299-9d13-e081486a33fe/11985925703-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a0b94d0a-210b-4b15-bd1d-93be2196c14a', 'Guns N’ Roses', 'Appetite for Destruction', 1987, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/47b74704-2833-4c3c-ba8a-6f7bb12074c2/20349249996-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9f7a4c28-8fa2-3113-929c-c47a9f7982c3', 'The Beatles', 'Sgt. Pepper’s Lonely Hearts Club Band', 1967, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/9dca8a47-b1e1-4810-aeb7-2774a0e7af5b/29759367493-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1a272023-10d3-38ee-bab3-317b55fcc21d', 'Pink Floyd', 'Wish You Were Here', 1975, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/ab775ce9-93b7-43d1-b6a6-7d7af6d8193f/12699578857-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8d73e45e-7ca1-3cb4-ae28-6da76196c17c', 'The Clash', 'London Calling', 1979, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/7bec22a0-eb73-4b79-a619-b253d5c2af87/4527734511-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4a4213d0-f224-3d51-bcca-476f61162681', 'The Rolling Stones', 'Sticky Fingers', 1971, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/5c230a38-999b-4331-a5ad-7d4c406bb0a6/35620164723-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '181b4a67-8ed2-455c-a2df-ddedfe053739', 'Pink Floyd', 'Run Like Hell (The Wall work in progress, pt. 2, 1979) (programme 1) (band demo)', 2020, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/4db7419d-b26b-45af-8948-547a2154d9a4/31097230065-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b1392450-e666-3926-a536-22c65f834433', 'Radiohead', 'OK Computer', 1997, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/30702389-5c67-4438-9ea0-2351c8de0f1d/43287476628-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5cbd9d7b-597a-3c5e-bfd1-c2b364215560', 'The Velvet Underground', 'The Velvet Underground & Nico', 1967, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/9410713d-f1d1-4ab7-bf02-085ff822a649/13498474967-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'de9bf827-a9b0-348b-a7c9-556c03c3fb07', 'Green Day', 'American Idiot', 2004, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/dd7cbde9-bffc-467f-8a39-bda4ea2d0633/4783139448-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cea5d18a-1924-3cda-bebc-38933834b25d', 'Pearl Jam', 'Ten', 1991, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/4816047b-5a40-462a-81e7-2f6eb6687fda/26843414237-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b8048f24-c026-3398-b23a-b5e50716cbc7', 'Radiohead', 'The Bends', 1994, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/8af759be-1495-4cc4-85a7-47edc21fa348/32251121765-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e959a4b3-6306-3c45-9df6-e7241dae9ea3', 'Sex Pistols', 'Never Mind the Bollocks Here’s the Sex Pistols', 1977, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/c6f06bc3-44ac-4555-8991-057f6bce36d7/41018729651-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b02f651e-32a1-30ae-bc23-070b59170278', 'Dire Straits', 'Brothers in Arms', 1985, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/c27a8c40-d884-4bf7-9067-d6571bef9752/11579652111-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '12fa3845-7c62-36e5-a8da-8be137155a72', 'Def Leppard', 'Hysteria', 1987, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/04be9a53-6265-4127-bb4b-4e2c4db71e3d/18892774424-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '314cffd4-daa5-3337-85e5-e54165a96113', 'Green Day', 'Dookie', 1994, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/20fef8d3-72b5-369a-9712-ad0b1ee6d226/7378765590-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cc053745-c447-3566-8f27-bed5438c9133', 'Black Sabbath', 'Paranoid', 1970, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/188fb66b-2fd9-41a7-8d81-088e20714ad1/22846264996-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3d00fb45-f8ab-3436-a8e1-b4bfc4d66913', 'Metallica', 'Master of Puppets', 1986, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/fed37cfc-2a6d-4569-9ac0-501a7c7598eb/2545774439-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '40e30dc1-55ac-33e1-85d3-1f1508140bfc', 'Rush', 'Moving Pictures', 1981, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/fecf8eef-cbb6-49b3-bc7d-b2912766cacc/24125653750-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ca5dfcc3-83fb-3eee-9061-c27296b77b2c', 'Red Hot Chili Peppers', 'Californication', 1999, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/058dcfa5-4921-4055-87b0-f541eb4adb08/15837297520-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2a0981fb-9593-3019-864b-ce934d97a16e', 'Nirvana', 'In Utero', 1993, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/7d13c434-1c49-4d7f-b164-a5247108af01/19918667556-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1af599c9-0b44-3a5a-a06b-39e8db6b2b4e', 'The Smashing Pumpkins', 'Mellon Collie and the Infinite Sadness', 1995, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/61a93f13-72ff-4aea-97e6-9b0954cb36b0/38216215200-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fb48b1dc-412f-36aa-8820-1023c08c46c6', 'Bob Dylan', 'Highway 61 Revisited', 1965, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/d61a2bd9-81ac-4023-bd22-1c884d4a176c/13700705404-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f6df6292-fd40-37c3-bd61-22c53abfe773', 'The Police', 'Synchronicity', 1983, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/53a7e6d5-077f-31a1-bd4d-9c4081dbd8f4/4426159553-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '393e5ea7-4789-3627-a292-ec5b06d2dd40', 'Foo Fighters', 'Monkey Wrench', 1997, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/11634209-c4a4-4ee8-b07d-80868519a8ab/35854870348-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '52ac731e-5244-3fb2-b477-e45d637ca8f9', 'Meat Loaf', 'Bat Out of Hell', 1977, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/74056419-375f-4877-a960-e5f442c8b82c/36330621037-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bf306022-c851-449d-a619-7864caddf5c7', 'Arcade Fire', 'The Suburbs', 2010, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/d6749a0e-f2f2-4ec6-badd-127631de2ebb/4021447055-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '19181d75-deda-366e-ace5-622293be9ef0', 'Red Hot Chili Peppers', 'Stadium Arcadium', 2006, '["Rock"]'::jsonb, 'http://coverartarchive.org/release/b729549f-c780-47ae-9f28-23624d2950a4/10083849774-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bcba43e7-2f72-3b60-b234-577e77fd2d9e', 'My Chemical Romance', 'The Black Parade', 2006, '["Rock"]'::jsonb, 'https://coverartarchive.org/release/3b36b9f9-8f3b-46a1-9c07-ef61a21d238a/27881510702-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8691d12c-abd8-385c-b1eb-d841190124f7', 'Lauryn Hill', 'The Miseducation of Lauryn Hill', 1998, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/c6e5d8ca-89e3-303c-b649-85f577e0cbc6/3376969940-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd9103c72-3807-4378-9ce7-b6f3e8fdd547', 'Kendrick Lamar', 'To Pimp a Butterfly', 2015, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/7d2294a9-fde9-4496-8ded-18e7ea8b7e29/40040680528-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fed1608d-80b7-38d2-aeb8-c6357f0d4c23', 'N.W.A', 'Straight Outta Compton', 1988, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/d930166c-e5b6-420d-8177-e62f351f6859/5658377319-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'eb655897-6cc5-3fc1-b9ed-5008eb80c682', 'OutKast', 'Aquemini', 1998, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/63f4592c-6f58-32bb-bd9f-a431dc14e04d/6640977411-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3c2d6ffe-61b9-46e5-b935-3b8df01f900d', 'Kanye West', 'My Beautiful Dark Twisted Fantasy', 2020, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/26b017c9-5506-4117-8667-ea981282bab0/27457858814-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '01921d99-9d15-3fce-8734-46e58327cfb7', 'Public Enemy', 'It Takes a Nation of Millions to Hold Us Back', 1988, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/4ef7fe79-3002-4779-9aa4-3430ae0ce6be/9705281248-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e0d90705-7ed4-428e-8a1b-0ab1cdabfb1d', 'Eric B. & Rakim', 'The Hits Album 7', 1987, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/a72ba2b2-2553-3d23-ad4d-ca031ad1f5f2/25448486309-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'dd2203dd-a149-316b-ad7f-a303dc4fc459', 'Fugees', 'The Score', 1996, '["Hip Hop"]'::jsonb, 'https://coverartarchive.org/release/13027e7b-340c-4478-8dda-df5fa4af3564/34355828522-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '00d2cd53-21c9-3738-b683-56847b7b0040', 'OutKast', 'Stankonia', 2000, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/296f8a54-eff7-3c6a-9857-164c05479c09/24569780625-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cfc98a2a-6aaa-3dda-a01d-e034e56c4fec', '2Pac', 'Me Against the World', 1995, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/3dbc70e8-b3a3-4a39-a1b6-1d4a6a4c7440/20098653914-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '13cf2244-c850-304d-bc46-b30e3f10e0cc', 'Public Enemy', 'Fear of a Black Planet', 1990, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/b1ec7150-bfd2-4dc2-b7c3-8a82826acc29/14823271238-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ac26d603-af30-3f88-8cee-3b2be29ea9e1', 'Big Pun', 'Capital Punishment', 1998, '["Hip Hop"]'::jsonb, 'http://coverartarchive.org/release/fa1ca0d6-fd3f-442a-adf7-e2004c19c1ac/33668570009-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ded7fe24-03ee-39f9-87db-eb5f263ea7f8', 'John Coltrane', 'Juan Les Pins Jazz Festival, Antibes, July 26-27, 1965', 1985, '["Jazz"]'::jsonb, 'https://coverartarchive.org/release/001d5f85-3997-4976-89f0-b3ca2d7dad7d/44002931814-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a3703e2d-cb78-4217-87ed-02da8e3ed71d', 'John Coltrane', 'Blue Train', 1957, '["Jazz"]'::jsonb, 'https://coverartarchive.org/release/11365fd1-adf9-4269-a97f-e6b2c0f1da35/41677512689-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a9e30282-5b37-3f92-b897-b9659a1a312b', 'Miles Davis', 'Bitches Brew', 1970, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/432048e8-9f82-4d67-a29d-781a8df28475/12676938708-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6a8ec885-544e-3b31-859a-a73289a01421', 'Ella Fitzgerald', 'Ella and Louis', 1956, '["Jazz"]'::jsonb, 'https://coverartarchive.org/release/3f1385f1-2cea-4902-bbb9-57564298d11e/44200576188-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f1753c0a-50be-3591-8cbb-6848142e055f', 'Weather Report', 'Heavy Weather', 1977, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/3a20f3f8-9cd7-42cd-beaf-c270110fd7ea/6195610317-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2cc1b146-245b-3598-9781-a9cda4434c96', 'Pat Metheny', 'Selected Recordings', 2004, '["Jazz"]'::jsonb, 'http://coverartarchive.org/release/bfba514f-4de7-426c-8d29-3825c8e0ad4d/12785981953-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e9c77a39-dac4-4133-8b2a-4732addb3b97', 'Miles Davis', 'Tutu / Portia', 1986, '["Jazz"]'::jsonb, 'https://coverartarchive.org/release/f80336de-c1c7-4fc4-9a17-65cbca8b880c/41625027643-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e6d5685a-88c4-476d-8ccb-48d1f7933631', 'Madonna', 'Madonna', 1984, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/0fe94e00-2f95-40c4-903c-3892bee16361/34941538959-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'aa366795-92d7-4d67-91fa-6741f82a4858', 'Dua Lipa', 'Future Nostalgia', 2020, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/57bc5762-baa9-48d8-93ec-7858d8350880/25777832070-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6bc9bb01-5e83-4b83-baa3-b73f366be9b2', 'Katy Perry', 'Best of 2010 Workout Mix', 2010, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/d11583fd-3f31-4a5f-8f20-1f83d3157b31/32512149079-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e5495719-b3ad-3eea-a533-fb70af43c23d', 'Lady Gaga', 'The Fame', 2008, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/8c86403a-6bfb-40f8-a1db-1cde6cbf68a5/33619706574-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a5711a77-42d1-3f4c-830c-e27a96f0800f', 'Michael Jackson', 'Bad', 1987, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/60b529f1-f99b-499f-9b3d-e96f9971039e/17067123637-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '122677be-e664-362d-95eb-be3ae126ec03', 'Madonna', 'Confessions on a Dance Floor', 2005, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/dad32a16-edb0-3ac7-91d4-7d28c3fab90e/21627428572-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7ad49811-5a69-4625-b670-aec9d6b7eedd', 'Lady Gaga', 'Songs for Japan', 2011, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/ee3e0c0d-17c9-4919-b940-191b2a2c152c/7011456152-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd6b52521-0dfa-390f-970f-790174c22752', 'Michael Jackson', 'Dangerous', 1991, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/6f58a014-fcd2-4f7c-a0fe-8cd537aaa90c/28001745055-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f850adcc-4f9f-365c-bc44-fdc0d5eaa565', 'Britney Spears', 'Britney', 2001, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/7ea2150f-7c49-48cd-9d69-b241c010971b/29341703079-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a6e55ef4-5a58-4498-baa7-da2771682e7a', 'Beyoncé', 'Life Is but a Dream / Live in Atlantic City', 2013, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/a3a4bcec-06b1-4919-9300-32db9ed18255/13219624081-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f952554e-9734-424c-a6f4-880fce40ea4b', 'Madonna', 'Hit Explosion ’98 Volume 6', 1998, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/c1ae3489-47cf-4b43-94f9-f550af169712/28398612342-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fd853aff-dd21-45d1-bc3a-7f9208e47e69', 'Ed Sheeran', 'DMC Classic Mixes: I Love Ed Sheeran, Volume 1', 2017, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/a10f6fe3-828e-487f-831a-4e4d6fa8d253/20173457183-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6eac2e57-ee50-36f8-b0c4-c4c847a2c098', 'Amy Winehouse', 'Back to Black', 2006, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/ccf4da26-ea82-462f-b753-88bb976fd40e/36926439244-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b9990da8-7953-4e64-aea5-065ca9cd3cb7', 'Harry Styles', 'Fine Line', 2019, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/61210065-4118-43f9-866f-4038cfae5df4/24909263406-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '78570bea-2a26-467c-a3db-c52723ceb394', 'The Weeknd', 'After Hours', 2020, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/19e4f6cc-ca0c-4897-8dfc-a36914b7f998/25720993837-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7c6de97d-bf6a-4793-82f5-f142baed33e6', 'Rihanna', 'Loud', 2010, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/7d3ebe0a-94a1-45a2-89f3-dc008837b338/14542240865-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e5495719-b3ad-3eea-a533-fb70af43c23d', 'Lady Gaga', 'The Fame', 2008, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/8c86403a-6bfb-40f8-a1db-1cde6cbf68a5/33619706574-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0df19e51-b297-4721-96b6-43d6874755b9', 'Demi Lovato', 'Confident', 2015, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/f820acf7-ca4b-4319-a166-8e4fa34a8d23/11535787496-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3c39a076-8e52-38f2-8076-260d0672fb23', 'Bruce Springsteen', 'Born in the U.S.A.', 1984, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/25f0fa1b-ae04-479a-a182-18a655ff6040/22071692146-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '120c786d-a3b2-3c19-b4ff-2b7b3b4435bf', 'Coldplay', 'A Rush of Blood to the Head', 2002, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/4b7f7429-68d7-43d4-ad2c-ade801014739/11894501637-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9c3f6f2c-b5f7-4711-9a8d-16457e791f30', 'Ed Sheeran', 'Thinking Out Loud', 2014, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/6bf31b54-df22-4038-92e1-85c64625631f/39175903813-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '31ff29d7-bd6f-40ce-aadf-d88372816437', '*NSYNC', 'Live From Madison Square Garden', 2000, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/2e0dc385-c0fc-472c-a554-f93032f4ea36/40892315229-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a73cecde-0923-40ad-aad1-e8c24ba6c3d2', 'Taylor Swift', 'Red', 2012, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/22cdc2ff-de42-4286-af9c-0917720ea92d/30972212603-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0dcc84fb-c592-46e9-ba92-a52bb44dd553', 'Taylor Swift', 'Midnights', 2022, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/225e37e3-2e65-4b12-b3e1-0f7f55b4c7a2/33805198179-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6f3e9fa6-be7a-3de8-a2b2-2072ece8a54d', 'U2', 'The Joshua Tree', 1987, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/5853f9e0-f0f3-4299-9d13-e081486a33fe/11985925703-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7e48f018-b774-32e6-a68b-b42db04535c0', 'Rihanna', 'Good Girl Gone Bad', 2007, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/0bbca21e-43f6-4da7-8f3c-cebaea81da31/41460529279-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3c9c8d72-fe62-4dab-8902-ffef0fc0d5b7', 'All Time Low', 'Future Hearts', 2015, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/cd6f649b-6d05-414a-8879-19e9d6018dcf/13145574628-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b03acc76-033e-4119-9e42-1e72422ca915', 'Lana Del Rey', 'Best of 2012: Die Hits des Jahres', 2012, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/fa67edfb-7557-40d8-bd69-2cdabfe2a5f0/42261544715-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '393e5ea7-4789-3627-a292-ec5b06d2dd40', 'Foo Fighters', 'Monkey Wrench', 1997, '["Pop"]'::jsonb, 'http://coverartarchive.org/release/11634209-c4a4-4ee8-b07d-80868519a8ab/35854870348-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3c17624c-bd67-4e40-8a02-a917dc565ec9', 'Madonna', 'Platin 2007, Volume 1', 2007, '["Pop"]'::jsonb, 'https://coverartarchive.org/release/918842d8-2a9b-4760-ac6a-afc5708e799e/42551706150-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '41d31668-8ec9-4d99-8659-ec1ff4bff8d6', 'Massive Attack', 'Mezzanine Live Royal Albert Hall 1998', 1998, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/40430fdd-4787-4fe5-8196-cf76a268b750/38513995129-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fddedc4f-7a2e-3d7d-9ec5-1705c416f3f4', 'Burial', 'Untrue', 2007, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/e685c54d-196c-47bd-9a75-74dafe4c43b7/24820081496-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '1c58a37a-24dc-493d-a40e-227ba1523d35', 'Jon Hopkins', 'Immunity', 2013, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/9b93c88b-b939-4206-af30-b3a3e7f1ab8d/19868220640-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '11a7c281-a260-4f77-a1d5-1ff2d4c917eb', 'Aphex Twin', 'Syro', 2014, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/bd801fd0-c959-4838-a956-9981e024205a/27252109776-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '69f4aa7f-d760-3890-bd2a-902fb9abe40b', 'The Chemical Brothers', 'Dig Your Own Hole', 1997, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/4331ea73-77e1-3213-a840-5e4e74180f93/2609487756-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c26bfd5d-4242-403a-9a78-40a800ddee13', 'Bonobo', 'Supperclub: Seduction', 2010, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/9749a684-0bff-44ac-bf77-bf1a2ff933f6/14807248783-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '48140466-cff6-3222-bd55-63c27e43190d', 'Portishead', 'Dummy', 1994, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd/829521842-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '401bc572-414c-3cb2-b2b8-fbef17eb9ab0', 'Boards of Canada', 'The Campfire Headphase', 2005, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/f5989ccc-19ce-46a8-b148-b0158a49d09d/38695169747-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0f891855-ea0c-36f4-b851-0cbf9eeb5a95', 'New Order', 'Movement', 1981, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/70d6e8cb-d069-444d-b5c6-981fc010df4a/26802658003-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4f625d26-3d84-3d3b-8230-2c98e5d45100', 'Deee‐Lite', 'World Clique', 1990, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/5fb50584-558d-4517-91e2-04de4c64d04d/41424511009-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0eb13d65-b2a3-4b1b-9a2e-da61d6ba55e5', 'The Chemical Brothers', 'For That Beautiful Feeling', 2023, '["Electronic"]'::jsonb, 'https://coverartarchive.org/release/12e4dc18-b8b0-4180-8c7e-0ca2cd44ed3b/43577461426-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f068c8b2-5691-4219-8d2a-f5b090f45e2f', 'Tycho', 'Live @ Boiler Room', 2014, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/d8ac6819-6715-43be-8c94-e39c98c441ea/17164681658-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7b49f37f-06a6-4c71-970f-c1905c19906f', 'Jon Hopkins', 'Singularity', 2018, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/2763165d-02a2-414f-a26c-0362cc537baf/22277661395-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cf39d16f-67bf-4d04-a0a3-177a93eba453', 'Disclosure', 'ENERGY', 2020, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/62e78726-8793-4060-9bf4-462bb96e45ed/36180772938-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '163339ab-813b-3d29-bba8-e1d5acf63cab', 'Portishead', 'Third', 2008, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/f5bfccaf-1816-427a-b03d-b41c8ac155c5/8201679314-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f9fa083f-db00-3048-99e7-5b186672bb09', 'The Prodigy', 'Music for the Jilted Generation', 1994, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/b2ac073a-4b6b-3fb2-95e7-c3434792b46a/33977745359-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5e0c6af6-3be2-3bd9-aa63-d2daff6537bf', 'The Chemical Brothers', 'We Are the Night', 2007, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/5d1ef500-7004-4756-a45d-8b1f43692dc5/10118092077-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '22ca85ec-ee39-3895-aef9-dee5d5c2f4d6', 'The Chemical Brothers', 'Surrender', 1999, '["Electronic"]'::jsonb, 'http://coverartarchive.org/release/41b75b24-096d-4f36-a10d-7cd2766408dc/26737910228-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cc053745-c447-3566-8f27-bed5438c9133', 'Black Sabbath', 'Paranoid', 1970, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/188fb66b-2fd9-41a7-8d81-088e20714ad1/22846264996-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '3d00fb45-f8ab-3436-a8e1-b4bfc4d66913', 'Metallica', 'Master of Puppets', 1986, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/fed37cfc-2a6d-4569-9ac0-501a7c7598eb/2545774439-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4ebfe175-e7ed-34cd-8e91-67c7e4a53579', 'Iron Maiden', 'The Number of the Beast', 1982, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/20d20196-ee7b-3069-aaca-943b8ee5a28a/8978752966-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'dbf1b3c0-1efb-4e5f-9fe1-4c42b144aa24', 'Slayer', 'Reign in Blood', 1986, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/f09a3d0b-5760-41e5-bd62-1e7403b27522/26676279934-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '19e7c9f3-7c4c-3a56-ba50-4156b39f76ca', 'Megadeth', 'Rust in Peace', 1990, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/e68c6a5e-0773-4b5c-bb66-b6f032bb2db4/12663594543-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0da580f2-6768-498f-af9d-2becaddf15e0', 'Metallica', 'Ride the Lightning', 1984, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/589ff96d-0be8-3f82-bdd2-299592e51b40/41578959727-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '826c9743-a3f0-3479-bf06-8df2e140ef1d', 'Black Sabbath', 'Black Sabbath', 1970, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/9fd196b4-0437-4ce2-9e7e-9966dfa86180/15612615429-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '60a20bc8-acac-3cbb-99f9-ce458317233a', 'Iron Maiden', 'Powerslave', 1984, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/6e09525c-b618-4d72-83ce-10735d693aa6/7847492404-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '814e0b20-6884-31c5-9d99-d215f048cfd6', 'Pantera', 'Vulgar Display of Power', 1992, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/ffcec0de-d12e-3677-9607-4ece6d5c97a5/7967409791-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4e7b34de-0d87-356a-a3da-b21f769b7d4d', 'Dio', 'Holy Diver', 1983, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/387ac5e9-2c9b-411a-b0ad-2c2e87262b4f/41165851002-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f44f4f73-a714-31a1-a4b8-bfcaaf311f50', 'Metallica', 'Kill ’Em All', 1983, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/0d099294-ec29-4d0b-821d-202a32c85a14/25181401889-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f50fbcb4-bfcd-3784-b4c9-44f4793e66b2', 'System of a Down', 'Toxicity', 2001, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/8a3f60ff-5b9b-4918-b20a-de16589a0629/21505269729-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '02f79295-21e1-34cc-82f2-63219eec4f0a', 'Tool', 'Lateralus', 2001, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/ea5777f4-867b-4ce2-bfa9-8f3a2239812d/23720211016-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bd675025-abcb-3536-9e19-ba3204c0183d', 'Death', 'Symbolic', 1995, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/e77c72ec-6e3f-4e4f-917c-3e7f1125884a/13631387236-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a0398241-a842-3593-83b4-a1aa1df23328', 'Pantera', 'Cowboys From Hell', 1990, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/a56ac0aa-1020-3b70-b0e1-040fd8ea909d/43661499023-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '43ac82b5-eceb-3909-a153-3c00ea9c7b9a', 'Black Sabbath', 'Heaven and Hell', 1980, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/27e6d639-cd58-36d7-95ff-52e4dafd99a1/1965053043-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e6cebdb0-4116-39d1-a944-2138b8a7af7c', 'Dissection', 'Storm of the Light’s Bane', 1995, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/28214c6e-12e1-478d-bcab-ce83c30cee5d/19796780440-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '00f78b7d-bd0a-356a-aec4-925e529023f8', 'Opeth', 'Ghost Reveries', 2005, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/fb9907a6-3589-49f9-b7a3-5dd33d9f4afd/18749626774-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0cd38da9-90a9-3e0b-bef6-e70036c8a619', 'Death', 'The Sound of Perseverance', 1998, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/6a965892-563f-477a-9353-e2bb321d28e2/21861523354-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ea110d40-17d2-39d9-8c12-2eb5257b8d11', 'Bathory', 'Blood Fire Death', 1988, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/1f624fe7-dc98-3b34-a908-63a2f52739df/14548605577-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '51d51de2-0312-4798-8529-bed2ae2581c6', 'Motörhead', 'Ace of Spades', 1980, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/6d30be96-5999-49a8-a7d5-62c73549808e/1820851358-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6d9ffabb-233a-3cc1-9ac3-d2a8e4c99cdd', 'Sepultura', 'Arise', 1991, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/2f50a496-9417-4e65-9f96-1d1758f6a057/19192586880-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd7326eb6-c9a6-36d6-8657-492f211a8709', 'Children of Bodom', 'Follow the Reaper', 2000, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/dbfe993f-6bfa-43f5-b907-9e2e0199b140/4258683037-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2803e437-51cc-305e-a8fe-2daba8901eac', 'Trivium', 'Shogun', 2008, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/6a3c2524-2c7a-4858-89f1-b5d57e2d24d4/36267310631-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7d42c10a-5cc7-3af4-89c6-5234e452e6d0', 'Candlemass', 'Epicus Doomicus Metallicus', 1986, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/ad1f712e-ced9-333a-900a-a270fb92da8f/6489153806-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a5fe4d2d-3aab-3e86-91ad-22a3fe16c4f2', 'Iron Maiden', 'Somewhere in Time', 1986, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/fb627640-6d02-4551-981f-eec3f03fb2e0/37991535481-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '691d202a-dd52-436d-9db1-18ca2d7a381b', 'Sepultura', 'Kerrang! Welcome to Planet Rock', 1996, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/fca2bc82-874f-4af8-9a4a-6e98cf23dd62/31654914177-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ef1e8130-dd5f-336a-85fa-4936a47342bd', 'Tool', 'Ænima', 1996, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/bb6bd783-6a88-40c6-9abf-ee1c80b3f753/32803266360-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'defcc444-7255-320d-bf21-888eb4d53ff9', 'Mastodon', 'Crack the Skye', 2009, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/d8482d42-f58b-4986-b835-1318dbb60a58/2794110510-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bb54def1-20ed-3970-a51e-32f03be5a397', 'Fear Factory', 'Demanufacture', 1995, '["Metal"]'::jsonb, 'https://coverartarchive.org/release/1105db41-8bbe-4177-adaa-8dc82401a2b1/42245347495-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '75a041d3-1fa8-3082-bf4a-ad65416c4624', 'Pantera', 'The Great Southern Trendkill', 1996, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/93bec3a0-ec60-3cf0-a405-e9ba5c285198/11585968407-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '67553e23-8dad-3792-b6f2-8fedd5650ff3', 'Metallica', '…And Justice for All', 1988, '["Metal"]'::jsonb, 'http://coverartarchive.org/release/da53e497-8c61-4d4a-a29b-a5b53d86ccb7/7476858115-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e959a4b3-6306-3c45-9df6-e7241dae9ea3', 'Sex Pistols', 'Never Mind the Bollocks Here’s the Sex Pistols', 1977, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/c6f06bc3-44ac-4555-8991-057f6bce36d7/41018729651-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8d73e45e-7ca1-3cb4-ae28-6da76196c17c', 'The Clash', 'London Calling', 1979, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/7bec22a0-eb73-4b79-a619-b253d5c2af87/4527734511-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ca91cb5a-7ecc-3c46-84a0-0d4951889374', 'The Clash', 'The Clash', 1977, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/64d16be8-0039-4c74-86ed-4d16b61ed59b/5133157385-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2cf40300-0f67-3136-9b84-57104f1f7a50', 'Black Flag', 'Damaged', 1981, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/d718298d-3b67-4538-8067-657058f4cfd0/29280679750-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '314cffd4-daa5-3337-85e5-e54165a96113', 'Green Day', 'Dookie', 1994, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/20fef8d3-72b5-369a-9712-ad0b1ee6d226/7378765590-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'de9bf827-a9b0-348b-a7c9-556c03c3fb07', 'Green Day', 'American Idiot', 2004, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/dd7cbde9-bffc-467f-8a39-bda4ea2d0633/4783139448-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cd367c59-eb86-384b-bbc7-62f6d2d677b9', 'blink‐182', 'Enema of the State', 1999, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/529e7968-df4f-495f-8c63-762c2d46a92e/28080650515-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bcba43e7-2f72-3b60-b234-577e77fd2d9e', 'My Chemical Romance', 'The Black Parade', 2006, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/3b36b9f9-8f3b-46a1-9c07-ef61a21d238a/27881510702-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ce6f4b2d-a51a-35ac-992f-3657e7c531d5', 'Hüsker Dü', 'Zen Arcade', 1984, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/e4da20c7-5507-4c21-a5ec-38ef8e7fedd9/37200598279-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c7c2de8e-3c98-3923-a4d9-54c4295d20b4', 'Fugazi', 'Repeater', 1990, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/ba7338bd-58d5-46cf-b015-255b7491674b/8289434727-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8d73e45e-7ca1-3cb4-ae28-6da76196c17c', 'The Clash', 'London Calling', 1979, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/7bec22a0-eb73-4b79-a619-b253d5c2af87/4527734511-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '17576d27-a0ea-3f37-8ef8-9a88f66c1e10', 'Bad Religion', 'No Control', 1989, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/6802ada8-7ebd-42a8-8a13-84ea02b9e334/8758257242-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8f5c4731-688f-3612-b5fe-318842359579', 'Circle Jerks', 'Group Sex', 1980, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/92492a06-4834-4819-9def-6cb19f473435/28797972563-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'db4d417f-8295-3843-829d-2b8c0b649517', 'Minor Threat', 'Out of Step', 1983, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/507bb61e-c7fa-3dd5-ba2d-d6f0f6e2f792/6010164584-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '56343eb2-ea5d-4461-8f9f-22fcddc9c733', 'The Replacements', '1984-07-07: Cubby Bear Lounge, Chicago, IL', 1984, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/58d70739-9f8d-44ea-b727-f9e346a985c7/31832223421-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '0c1a4d70-5926-3ae8-aa25-466fe65639fe', 'Blondie', 'Parallel Lines', 1978, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/b969aa80-8b4c-42aa-8df9-2bd1b20ee535/41049619288-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '385f30e2-0483-355d-aded-23e66aa20f87', 'Weezer', 'Pinkerton', 1996, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/ea71991d-cf38-44fc-acc4-467eb94ed799/38221121992-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'f1afec0b-26dd-3db5-9aa1-c91229a74a24', 'Nirvana', 'Bleach', 1989, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/adab3feb-1822-4d27-a997-db7d6c9688c0/26212361129-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '67ba7dda-893f-32ed-930c-f8ff5f5df18a', 'Bad Religion', 'Suffer', 1988, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/61cc0e1b-9e23-472c-a4f3-67db405e0c1d/3242437488-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b7f5ed97-bb72-31fb-acd8-4bad86d95a58', 'At the Drive‐In', 'Relationship of Command', 2000, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/7c53cd07-c639-4dbd-b97c-558a68c31aeb/32521810260-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5a6dd6cf-baca-474f-af3d-ac771bafef58', 'Sex Pistols', 'Halmstad, Beach Disco (live 1977‐07‐15)', 1977, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/35c66e3d-69f3-416c-b98b-fe4565964e90/41018738072-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fd199886-49b7-3b44-9ce9-90b6071f556e', 'Social Distortion', 'White Light White Heat White Trash', 1996, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/fba4d7e9-7905-4671-80af-6f45fe573d46/4808012062-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8c589292-711a-40e6-a936-5002cfa52f3a', 'The Offspring', 'Nitro', 1994, '["Punk"]'::jsonb, 'https://coverartarchive.org/release/7ed1942c-ed21-4fb7-a53a-17897b11723b/44233956277-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fcd23bde-a71f-3a1e-8c7a-cde4eb427532', 'The Clash', 'Give ’Em Enough Rope', 1978, '["Punk"]'::jsonb, 'http://coverartarchive.org/release/1c7f9bdc-0fc9-4b88-b4bb-b08985842f73/5133143493-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'c1fa4d2c-ec62-37d5-b01d-6df7f8fd2c90', 'Marvin Gaye', 'What’s Going On', 1971, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/ba91f9e2-2391-4bbd-9114-c9eff138fd98/23121356179-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cff5ab96-cc55-3b4e-b909-341fa398840c', 'Curtis Mayfield', 'Mega 70’s', 1999, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/dc366d7a-cab5-446d-901a-d7106d9127cd/34004117248-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '120c822e-3cd2-3652-975c-d687256a7931', 'Marvin Gaye', 'Let’s Get It On', 1973, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/584a5090-cb03-31af-b3eb-c0750b84692d/4516515462-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6eac2e57-ee50-36f8-b0c4-c4c847a2c098', 'Amy Winehouse', 'Back to Black', 2006, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/ccf4da26-ea82-462f-b753-88bb976fd40e/36926439244-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'a4591f67-48d9-36ae-bc68-2deb954d0a15', 'D’Angelo', 'Brown Sugar', 1995, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/b29372ff-92c5-4acf-a25b-38f63f390e72/43317874585-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b93a7c47-a6d4-33f2-9034-53fdd991f4ba', 'Prince', 'Purple Rain', 1984, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/7f5ab932-6dc9-4bf3-a127-cb4fe2abeb62/39157761364-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'dd2203dd-a149-316b-ad7f-a303dc4fc459', 'Fugees', 'The Score', 1996, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/13027e7b-340c-4478-8dda-df5fa4af3564/34355828522-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4e61585f-f341-3174-85cf-afad8df46fbe', 'George Michael', 'Faith', 1987, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/7eadba54-6cac-44ff-908a-bd8a99f65e3c/22190751693-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '9f6044fe-ad0a-4030-ab36-19b108f09413', 'Leon Bridges', 'Broadcasts, Vol. 23', 2015, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/e783dffb-d4ac-4028-9276-d90c2dab86f5/12450354438-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8691d12c-abd8-385c-b1eb-d841190124f7', 'Lauryn Hill', 'The Miseducation of Lauryn Hill', 1998, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/c6e5d8ca-89e3-303c-b649-85f577e0cbc6/3376969940-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'dc7a73e4-b92a-4000-8ae5-d87492dfcbb1', 'Robert Glasper Experiment', 'Black Radio', 2012, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/08b7d1e7-5c27-4591-918e-e8525d1fc2d7/39305073347-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd9103c72-3807-4378-9ce7-b6f3e8fdd547', 'Kendrick Lamar', 'To Pimp a Butterfly', 2015, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/7d2294a9-fde9-4496-8ded-18e7ea8b7e29/40040680528-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ec2757b4-1271-42d2-8374-63f2cd2acea0', 'Bruno Mars', 'Mastermix: DJ Beats Chart, Volume 38', 2016, '["Soul"]'::jsonb, 'http://coverartarchive.org/release/91a7ae27-1ca0-4d59-b011-110e54b235b2/27301916145-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'fa64febd-61e0-346e-aaa2-04564ed4f0a3', 'OutKast', 'Speakerboxxx / The Love Below', 2003, '["Soul"]'::jsonb, 'https://coverartarchive.org/release/50c273d5-2f92-340a-adc2-178d5adaab63/4765243287-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cb69bfc6-a15c-34cd-b1af-76b6481bf09a', 'Parliament', 'Mothership Connection', 1975, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/84bd98a9-017d-30eb-b557-d075957d802f/5544741092-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'ebafce35-df95-4b8c-aa89-a1f37b17e460', 'Rick James', 'Super Freak', 1981, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/0f683242-7e5b-4be1-b8df-e7aebee09560/26365560546-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '88e6d7b3-ec06-332f-84fc-74b700bad94e', 'Funkadelic', 'Phat Trax: The Best of Old School, Volume 2', 1994, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/c15a0651-e4d9-4ddb-b866-d4de4f74213b/29510618603-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '4b749ee4-3e3a-4b52-9221-bd7a6d196943', 'James Brown', 'The Singles, Volume 9: 1973-1975', 2010, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/b6483607-8cfa-4e60-b1a8-11e441f63249/18149811783-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b93a7c47-a6d4-33f2-9034-53fdd991f4ba', 'Prince', 'Purple Rain', 1984, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/7f5ab932-6dc9-4bf3-a127-cb4fe2abeb62/39157761364-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '561be5b7-a39c-3866-859d-d86f30816ae7', 'Prince', '1999', 1982, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/ab9aa125-6f26-4145-879c-f0c05ff6ac60/16637994690-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '120c822e-3cd2-3652-975c-d687256a7931', 'Marvin Gaye', 'Let’s Get It On', 1973, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/584a5090-cb03-31af-b3eb-c0750b84692d/4516515462-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '73678de7-ff7e-4935-9b11-020a5d1dc123', 'Funkadelic', 'Hell Ride (Quentin Tarantino)', 1971, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/6ce6e628-207b-4647-ae35-270bfbf3e9d5/43665115930-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2e58b620-cf80-3b07-a5bc-edabd69ba285', 'Kraftwerk', 'Computerwelt', 1981, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/fed2c979-be66-3af6-885c-a87f1ddf1964/14851831477-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'da0395e4-283c-3c51-bda0-b1022f344e40', 'James Brown', 'Get Up Offa That Thing', 1976, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/e82c6f01-f981-4595-a913-89a0955853f1/17813690002-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '65ad1bb2-1022-3f9e-a66f-4a1aa4536620', 'Parliament', 'Funkentelechy vs. the Placebo Syndrome', 1977, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/b213c010-da7c-3058-a40f-9398dab2df84/4233930119-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '13cf2244-c850-304d-bc46-b30e3f10e0cc', 'Public Enemy', 'Fear of a Black Planet', 1990, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/b1ec7150-bfd2-4dc2-b7c3-8a82826acc29/14823271238-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd3bc1a64-7561-3787-b680-0003aa50f8f1', 'AC/DC', 'Back in Black', 1980, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/38914b29-7788-4cff-80b7-1ced523f8675/11333065513-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '6a32aea5-67a0-45e1-8fc2-7d3c82ee21a1', 'Prince', 'Sign “O” the Times (live in Rotterdam 1987)', 2025, '["Funk"]'::jsonb, 'https://coverartarchive.org/release/bf8bf219-7fb0-496d-894e-e10905775c44/43322226548-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '426af9a8-68e8-45fc-8398-aa5a38cf698a', 'Prince', 'Dirty Mind', 1980, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/f85777b9-b4a4-4bcb-8f4a-626dc77aae24/35897506575-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'b544c1b2-9190-34ac-8d03-348c86a77cb2', 'Anita Baker', 'Rapture', 1986, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/90f3f3b9-8492-3f66-a660-cdbc5fc4d4ad/3461604768-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '20aaac17-e4e8-373c-99cc-211321b82832', 'Janet Jackson', 'Rhythm Nation 1814', 1989, '["Funk"]'::jsonb, 'http://coverartarchive.org/release/03f47647-35d3-3a64-832b-ff9846a154af/3890720100-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'e5495719-b3ad-3eea-a533-fb70af43c23d', 'Lady Gaga', 'The Fame', 2008, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/8c86403a-6bfb-40f8-a1db-1cde6cbf68a5/33619706574-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '122677be-e664-362d-95eb-be3ae126ec03', 'Madonna', 'Confessions on a Dance Floor', 2005, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/dad32a16-edb0-3ac7-91d4-7d28c3fab90e/21627428572-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'aa366795-92d7-4d67-91fa-6741f82a4858', 'Dua Lipa', 'Future Nostalgia', 2020, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/57bc5762-baa9-48d8-93ec-7858d8350880/25777832070-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd691b0b0-33c2-393a-bc63-dbb681ee662c', 'Kylie Minogue', 'Fever', 2001, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/8d3e2f07-e3f4-4c41-942a-54b59a812b1b/13226700705-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '8eacd366-feb2-4893-8451-3aa246cb56ff', 'The Michael Zager Band', 'Disco Fire', 1978, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/48d18576-8f02-4c06-ba08-09550ac4cf67/35483730555-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '36ea56c4-ec29-49ec-94e9-191f2470e815', 'Kool & the Gang', 'Disco Mania', 1975, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/339f89d2-2536-4df7-8ce8-81544c8e3db2/23592692189-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'd6a0570c-c8e1-3364-9ba7-9bb31c8deaee', 'Earth, Wind & Fire', 'Dance Trax', 1988, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/20a9fa7a-4307-4f81-9e7c-3cbda429c51f/11751689103-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '617aad90-abf0-4c73-8041-53017b30f834', 'George McCrae', 'Rock Your Baby', 1974, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/d4ed8ff8-20f0-4245-bb7a-502cdedd002b/16084191068-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5d3fb998-0857-37d5-b211-e95e646c38d5', 'Kool & the Gang', 'Ladies’ Night', 1979, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/94a95c06-a4c9-4a76-b834-6c6a33dfc6d0/10728608680-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '66316ef3-7bb4-4775-9471-57c0670f67eb', 'Donna Summer', 'Christmas Album', 1980, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/cd027be6-fabf-4d35-bd88-60b0f3016f89/39423950689-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'be31f4f6-6b3c-40cc-b9f9-41f855388849', 'Prince', 'April 86 Mixes', 1986, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/0db1a01a-7db4-449b-a139-11a743f0bc8a/35438552487-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '36ea56c4-ec29-49ec-94e9-191f2470e815', 'Van McCoy & The Soul City Symphony', 'Disco Mania', 1975, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/339f89d2-2536-4df7-8ce8-81544c8e3db2/23592692189-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5762775d-f4e7-49bd-acb0-4dad10ea8ef9', 'Earth, Wind & Fire', 'Vintage Summer Songs', 2024, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/3021f794-ce4f-43ba-be92-ff56b6d17bde/43527372205-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5e00a37a-7158-4610-abee-5e08ad224384', 'Chic', 'Disco Explosion (Die Absolute Disco Super Scheibe)', 1979, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/3ac9ae62-a967-4dd2-ae4d-80e3c9805242/28931136898-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '33ee6159-1d0d-3221-b2b9-1cb0d69f5d0e', 'Donna Summer', 'Love to Love You Baby', 1975, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/3eeb122c-77c8-41a5-b320-1eacf560cde6/42383429862-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2b7d0146-9e31-43d9-af95-0755fd536980', 'Diana Ross', 'The Boss', 1979, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/6da1996f-3156-45cc-b2f8-f9f10dd3e226/12362502993-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'acb1aa80-3ede-3a65-a862-5b0730c92607', 'Sister Sledge', 'We Are Family', 1979, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/4b4b26f7-7e2f-4029-94bd-8a94ebf79eff/13465941802-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '5e00a37a-7158-4610-abee-5e08ad224384', 'Anita Ward', 'Disco Explosion (Die Absolute Disco Super Scheibe)', 1979, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/3ac9ae62-a967-4dd2-ae4d-80e3c9805242/28931136898-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '45253e1a-de49-4050-b6bf-696aff2713ee', 'Vicki Sue Robinson', 'Buried Treasure 70s', 2021, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/2732b710-d9b4-4f89-8959-6ede1e7e4c56/35488618955-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '2fb1433a-dbe3-39c2-aed2-bc3ba0e7d8e4', 'A Taste Of Honey', 'A Taste of Honey', 1978, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/01536712-fd1c-46f1-b37d-531075765449/5803685674-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'bc892a89-7f1f-41ca-800e-c970adad87d0', 'Lady Gaga', 'NRJ Hit List 2011', 2011, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/5641ca47-86fd-4fa6-869e-2d029196d8f5/43992912891-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', 'cd78c961-3a03-4af6-8828-d9c7ff027bbe', 'Donna Summer', 'Thank God It’s Friday', 1978, '["Disco"]'::jsonb, 'https://coverartarchive.org/release/54b1a6d8-e020-4886-9d8b-f26a8ae8e7b9/43487777899-500.jpg');

INSERT INTO albums (source, mbid, artist, title, year, genres, cover_url)
VALUES ('master_list', '7c661dfc-eea0-41a3-9280-decd47cca15d', 'The S.O.S. Band', 'Sound Waves: Today’s Top Hits and Stars', 1980, '["Disco"]'::jsonb, 'http://coverartarchive.org/release/7d13dcb3-aae9-42dc-81bb-68472043a11a/32983335714-500.jpg');
