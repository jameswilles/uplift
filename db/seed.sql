create table uplift_user (
user_id serial primary key,
username varchar(30),
email varchar(250),
password varchar(300)
);

create table uplift_post (
post_id serial primary key,
post_user int references uplift_user(user_id),
content varchar(250)
);

create table uplift_liked_post (
user_id int references uplift_user(user_id),
post_id int references uplift_post(post_id)
);