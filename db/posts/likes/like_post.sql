insert into uplift_liked_post (user_id, post_id)
values ($2, $1);

select user_id from uplift_liked_post
where post_id = $1;