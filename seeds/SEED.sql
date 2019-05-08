USE elevated_db;
-- Users Table

INSERT INTO Users (user_name, user_email, user_password, dob, user_img, createdAt, updatedAt)
VALUES ("Bill", "test@gmail.com", "asfd", now(), "asff", now(), now());
INSERT INTO Users (user_name, user_email, user_password, dob, user_img, createdAt, updatedAt)
VALUES ("Will", "test1@gmail.com", "asfd", now(), "asff", now(), now());
INSERT INTO Users (user_name, user_email, user_password, dob, user_img, createdAt, updatedAt)
VALUES ("Greta", "test2@gmail.com", "asfd", now(), "asff", now(), now());


-- Labels Table

INSERT INTO Labels (label_name, label_img, label_avg_rating, createdAt, updatedAt)
VALUES ("asdf", "asdf", 5, now(), now());
INSERT INTO Labels (label_name, label_img, label_avg_rating, createdAt, updatedAt)
VALUES ("Phat Panda", "asdf", 5, now(), now());
INSERT INTO Labels (label_name, label_img, label_avg_rating, createdAt, updatedAt)
VALUES ("Leafly", "asdf", 1, now(), now());

-- Strains Table

INSERT INTO Strains (strain_name, strain_race, strain_flavor, strain_positive, strain_negative, strain_medical, strain_descr, strain_img, strain_avg_rating, createdAt, updatedAt)
VALUES ("Heaven", "Lit", "Mindblowing", "You get so high", "You won't wanna do anything", "This will heal you", "Must Buy", "asdf", 4,  now(), now());
INSERT INTO Strains (strain_name, strain_race, strain_flavor, strain_positive, strain_negative, strain_medical, strain_descr, strain_img, strain_avg_rating, createdAt, updatedAt)
VALUES ("Hell", "Burning", "Devilish", "Sink Sink Sink", "My life for Aiur", "Make it count", "Power Overwhelming", "asdf", 4,  now(), now());
INSERT INTO Strains (strain_name, strain_race, strain_flavor, strain_positive, strain_negative, strain_medical, strain_descr, strain_img, strain_avg_rating, createdAt, updatedAt)
VALUES ("asdf", "asdf", "asdf", "asdf", "asdf", "asdf", "asdf", "asdf", 4,  now(), now());

-- Strain_Reviews Table

INSERT INTO Strain_Reviews (strain_label_review, strain_label_rating, createdAt, updatedAt, user_id, label_id, strain_id)
VALUES ("thats the stuff, too good", 3.4, now(), now(), 1, 1, 1);
INSERT INTO Strain_Reviews (strain_label_review, strain_label_rating, createdAt, updatedAt, user_id, label_id, strain_id)
VALUES ("you have to try this!!! so good almost perfect", 3.4, now(), now(), 1, 2, 3);
INSERT INTO Strain_Reviews (strain_label_review, strain_label_rating, createdAt, updatedAt, user_id, label_id, strain_id)
VALUES ("just your average bud, nothing much more than that", 3.4, now(), now(), 3, 2, 1);
INSERT INTO Strain_Reviews (strain_label_review, strain_label_rating, createdAt, updatedAt, user_id, label_id, strain_id)
VALUES ("OH damn you need this and you need it now!", 3.4, now(), now(), 3, 3, 3);
INSERT INTO Strain_Reviews (strain_label_review, strain_label_rating, createdAt, updatedAt, user_id, label_id, strain_id)
VALUES ("good but expensive, other strains give you the same effect for the same price", 3.4, now(), now(), 2, 1, 3);


-- Tried_Strains Table

INSERT INTO Tried_Strains (createdAt, updatedAt, user_id, label_id, strain_id)
VALUES (now(), now(), 1, 1, 1);
INSERT INTO Tried_Strains (createdAt, updatedAt, user_id, label_id, strain_id)
VALUES (now(), now(), 2, 2, 2);
INSERT INTO Tried_Strains (createdAt, updatedAt, user_id, label_id, strain_id)
VALUES (now(), now(), 3, 3, 3);

-- Wishlisted_Strains Table

INSERT INTO Wishlisted_Strains (createdAt, updatedAt, user_id, label_id, strain_id)
VALUES (now(), now(), 1, 1, 1);
INSERT INTO Wishlisted_Strains (createdAt, updatedAt, user_id, label_id, strain_id)
VALUES (now(), now(), 2, 2, 2);
INSERT INTO Wishlisted_Strains (createdAt, updatedAt, user_id, label_id, strain_id)
VALUES (now(), now(), 3, 3, 3);

-- StrainLabels Table

INSERT INTO StrainLabels (createdAt, updatedAt, label_id, strain_id)
VALUES (now(), now(), 1, 1);
INSERT INTO StrainLabels (createdAt, updatedAt, label_id, strain_id)
VALUES (now(), now(), 2, 2);
INSERT INTO StrainLabels (createdAt, updatedAt, label_id, strain_id)
VALUES (now(), now(), 3, 3);

-- Merchants Table

INSERT INTO Merchants (merchant_name, merchant_email, merchant_password, merchant_verification_img, merchant_img, merchant_location, merchant_avg_rating, createdAt, updatedAt)
VALUES ("GreenGoods", "merch@gmail.com", "asdf", "asdf", "asfd", "Seattle", 4, now(), now());
INSERT INTO Merchants (merchant_name, merchant_email, merchant_password, merchant_verification_img, merchant_img, merchant_location, merchant_avg_rating, createdAt, updatedAt)
VALUES ("BlackGoods", "merch1@gmail.com", "asdf", "asdf", "asfd", "Seattle", 1, now(), now());
INSERT INTO Merchants (merchant_name, merchant_email, merchant_password, merchant_verification_img, merchant_img, merchant_location, merchant_avg_rating, createdAt, updatedAt)
VALUES ("PinkGoods", "merch2@gmail.com", "asdf", "asdf", "asfd", "Seattle", 3, now(), now());

-- Merchant_Reviews Table

INSERT INTO Merchant_Reviews (merchant_review, merchant_rating, createdAt, updatedAt, merchant_id, user_id)
VALUES ("Friendly and informative", 5, now(), now(), 1, 1);
INSERT INTO Merchant_Reviews (merchant_review, merchant_rating, createdAt, updatedAt, merchant_id, user_id)
VALUES ("RUDE AF NEVER GOING BACK, SHITS AWFUL TOO", 1, now(), now(), 2, 3);
INSERT INTO Merchant_Reviews (merchant_review, merchant_rating, createdAt, updatedAt, merchant_id, user_id)
VALUES ("Meh", 3, now(), now(), 3, 2);

-- Merchant_Ads Table

INSERT INTO Merchant_Ads (merchant_id, ad_img, createdAt, updatedAt)
VALUES (1, "asdf", now(), now());
INSERT INTO Merchant_Ads (merchant_id, ad_img, createdAt, updatedAt)
VALUES (2, "asdf", now(), now());
INSERT INTO Merchant_Ads (merchant_id, ad_img, createdAt, updatedAt)
VALUES (3, "asdf", now(), now());

-- Growers Table

INSERT INTO Growers (grower_name, grower_email, grower_password, grower_verification_img, grower_img, grower_avg_rating, createdAt, updatedAt) 
VALUES ("Leafy", "grower@gmail.com", "asdf", true, "asdf", 3, now(), now());
INSERT INTO Growers (grower_name, grower_email, grower_password, grower_verification_img, grower_img, grower_avg_rating, createdAt, updatedAt) 
VALUES ("Greeny", "grower1@gmail.com", "asdf", false, "asdf", 5, now(), now());
INSERT INTO Growers (grower_name, grower_email, grower_password, grower_verification_img, grower_img, grower_avg_rating, createdAt, updatedAt) 
VALUES ("Browny", "grower2@gmail.com", "asdf", false, "asdf", 2, now(), now());

-- Grower_Reviews Table

INSERT INTO Grower_Reviews (grower_review, grower_rating, createdAt, updatedAt, grower_id, merchant_id) 
VALUES ("GOOD SHIT", 5, now(), now(), 1, 1);
INSERT INTO Grower_Reviews (grower_review, grower_rating, createdAt, updatedAt, grower_id, merchant_id) 
VALUES ("BAD SHIT", 1, now(), now(), 2, 2);
INSERT INTO Grower_Reviews (grower_review, grower_rating, createdAt, updatedAt, grower_id, merchant_id) 
VALUES ("MEH SHIT", 3, now(), now(), 3, 3);

-- Grower_Menus Table

INSERT INTO Grower_Menus (grower_id, strain_menu_items, createdAt, updatedAt) 
VALUES (1, "ALL THE GREEN STUFF", now(), now());
INSERT INTO Grower_Menus (grower_id, strain_menu_items, createdAt, updatedAt) 
VALUES (2, "ALL THE Good STUFF", now(), now());
INSERT INTO Grower_Menus (grower_id, strain_menu_items, createdAt, updatedAt) 
VALUES (3, "ALL THE Bad STUFF", now(), now());