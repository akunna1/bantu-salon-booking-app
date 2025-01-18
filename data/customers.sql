INSERT INTO customers (
    first_name, last_name, email, phone, address1, address2, city, state, zip, notes, active, created_at, updated_at
) VALUES
    ('Akunne', 'Awele', 'akunne.awele@gmail.com', '919-456-7890', '123 Main St', 'Apt 4B', 'Raleigh', 'NC', '27421', 'Customer since 2020', true, now(), now()),
    ('Mariam', 'Musa', 'mh.musa@gmail.com', '919-654-3210', '456 Oak St', NULL, 'Greensboro', 'NC', '27513', 'VIP customer', true, now(), now()),
    ('Agnes', 'Baptiste', 'agnes.777@gmail.com', '919-123-4567', '789 Pine St', 'Suite 100', 'Wake Forest', 'NC', '27653', NULL, true, now(), now()),
    ('Bimbo', 'Adewale', 'bimbo.ade@gmail.com', '917-555-6666', '321 Maple St', NULL, 'Chapel Hill', 'NC', '27514', 'Preferred customer', true, now(), now()),
    ('Sunny', 'Bobo', 'sunny.bobo@gmail.com', '919-333-4444', '654 Elm St', 'Floor 2', 'Raleigh', 'NC', '27421', 'New customer', true, now(), now());