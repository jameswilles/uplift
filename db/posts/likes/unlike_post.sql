delete from uplift_liked_post
where user_id = $2
and post_id = $1;

select user_id from uplift_liked_post
where post_id = $1;