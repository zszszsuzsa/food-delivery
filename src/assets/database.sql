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
           ('El��tel'
           ,'Sal�ta csirkemellel, ubork�val, pir�tott keny�rkock�val'
           ,'C�z�r sal�ta'
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
           ('El��tel'
           ,'Amerikai k�posztasal�ta'
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
           ('El��tel'
           ,'T�kmag pestoval'
           ,'T�csni'
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
           ,'Csigat�szt�val vagy m�jgalusk�val'
           ,'H�sleves'
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
           ,'Tejf�l�s cs�lk�s'
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
           ,'Tejsz�nhabbal, erdei gy�m�lcs�kkel'
           ,'Gy�m�lcsleves'
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
           ,'Pontyb�l, harcs�b�l �s bus�b�l'
           ,'Hal�szl�'
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
           ('F��tel'
           ,'T�rtburgony�val'
           ,'Pacalp�rk�lt'
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
           ('F��tel'
           ,'T�rtburgony�val'
		   ,'Pacalp�rk�lt'
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
           ('F��tel'
           ,''
           ,'B�csi szelet'
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
           ('F��tel'
           ,'Rizzsel, vagy has�bburgony�val'
           ,'R�ntott cukkini'
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
           ('F��tel'
           ,'Galusk�val'
		   ,'Marhap�rk�lt'
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
		   ,'Paradicsomsz�sz, bazsalikom'
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
		   ,'Tonhalas, paradicsomos, mozzarell�s'
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
           ,'N�gyf�le sajttal'
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
           ,'Sonk�val, pik�ns szal�mival, f�st�lt kolb�sszal'
		   ,'H�sim�d� Pizza'
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
           ,'Soml�i galuska'
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
		   ,'�sv�nyv�z'
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
           ,'H�zi limon�d�'
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