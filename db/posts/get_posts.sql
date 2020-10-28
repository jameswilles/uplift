select p.post_id, p.content, u.username from uplift_post p
join uplift_user u on p.post_user = u.user_id;