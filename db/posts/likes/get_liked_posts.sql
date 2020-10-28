select p.content, u.username from uplift_liked_post l
join uplift_user u on l.user_id = u.user_id
join uplift_post p on l.post_id = p.post_id
where l.user_id = $1;