select p.post_id, p.content from uplift_post p
join uplift_user u on p.post_user = u.user_id
where u.user_id = $1;