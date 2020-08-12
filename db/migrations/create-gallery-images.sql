CREATE TABLE IF NOT EXISTS gallery_images(
id SERIAL PRIMARY KEY
);

ALTER TABLE gallery_images
ADD COLUMN gallery_id INTEGER REFERENCES galleries(id);

ALTER TABLE gallery_images
ADD COLUMN images_id INTEGER REFERENCES images(id);
