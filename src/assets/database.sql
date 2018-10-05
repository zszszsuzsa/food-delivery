CREATE SCHEMA `dbo` DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci

CREATE TABLE dbo.MenuItems(
Id INT PRIMARY KEY not null AUTO_INCREMENT,
Category VARCHAR(255),
Description VARCHAR(255),
Name VARCHAR(255),
Price INT not null,
Spicy INT DEFAULT null CHECK (Spicy=0 OR  Spicy=1),  
Vegetarian INT DEFAULT null CHECK (Vegetarian=0 OR  Vegetarian=1) 
);

CREATE TABLE dbo.Orders(
order_id INT PRIMARY KEY not null AUTO_INCREMENT,
Menu_item_id INT NOT null,
Quantity INT not null DEFAULT 1,
Buyer_name VARCHAR(255) not null,
Buyer_address VARCHAR(255) not null,
Buyer_phone VARCHAR(255)not null,
Create_date TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (`Menu_item_id`) REFERENCES `dbo`.`menuitems`(`Id`))

INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Elõétel'
           ,'Saláta csirkemellel, uborkával, pirított kenyérkockával'
           ,'Cézár saláta'
           ,700
           ,0
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Elõétel'
           ,'Amerikai káposztasaláta'
           ,'Coleslaw'
           ,500
           ,0
           ,0);
 

INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Elõétel'
           ,'Tökmag pestoval'
           ,'Tócsni'
           ,750
           ,0
           ,1);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Leves'
           ,'Csigatésztával vagy májgaluskával'
           ,'Húsleves'
		   ,800
           ,0
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Leves'
           ,'Tejfölös csülkös'
           ,'Bableves'
		   ,1000
           ,0
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Leves'
           ,'Tejszínhabbal, erdei gyümölcsökkel'
           ,'Gyümölcsleves'
		   ,1000
           ,0
           ,1);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Leves'
           ,'Pontyból, harcsából és busából'
           ,'Halászlé'
		   ,1500
           ,1
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Fõétel'
           ,'Törtburgonyával'
           ,'Pacalpörkölt'
		   ,1200
           ,0
           ,1);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Fõétel'
           ,'Törtburgonyával'
		   ,'Pacalpörkölt'
           ,1200
           ,0
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Fõétel'
           ,''
           ,'Bécsi szelet'
		   ,2500
           ,0
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Fõétel'
           ,'Rizzsel, vagy hasábburgonyával'
           ,'Rántott cukkini'
		   ,1500
           ,0
           ,1);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Fõétel'
           ,'Galuskával'
		   ,'Marhapörkölt'
           ,2500
           ,0
           ,1);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Pizza'
		   ,'Paradicsomszósz, bazsalikom'
           ,'Pizza Margherita'
           ,1000
           ,0
           ,1);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Pizza'
		   ,'Tonhalas, paradicsomos, mozzarellás'
           ,'Pizza Tonno'
           ,1500
           ,0
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Pizza'
           ,'Négyféle sajttal'
		   ,'Pizza Quattro Formaggi'
           ,2000
           ,0
           ,1);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Pizza'
           ,'Sonkával, pikáns szalámival, füstölt kolbásszal'
		   ,'Húsimádó Pizza'
           ,2000
           ,1
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Desszert'
		   ,''
           ,'Somlói galuska'
           ,1000
           ,0
           ,0);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Ital'
           ,null
		   ,'Coca-Cola'
           ,300
           ,null
           ,null);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Ital'
           ,null
		   ,'Ásványvíz'
           ,300
           ,null
           ,null);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Ital'
           ,null
           ,'Házi limonádé'
           ,650
           ,null
           ,null);
 
INSERT INTO dbo.MenuItems
           (Category
           ,Description
           ,Name
           ,Price
           ,Spicy
           ,Vegetarian)
     VALUES
           ('Ital'
           ,null
           ,'Red Bull'
		   ,700
           ,null
           ,null)