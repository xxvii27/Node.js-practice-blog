# Node.js-practice-blog
Node.js practice 

# API Documentation

Root: 

https://blooming-headland-5093.herokuapp.com/api/

Routes (Use x-www-form-urlencoded for post and put):

# Posts

POST (CREATE):

https://blooming-headland-5093.herokuapp.com/api/posts

GET (READ):

https://blooming-headland-5093.herokuapp.com/api/posts

https://blooming-headland-5093.herokuapp.com/api/posts/:post_id

PUT (UPDATE):

https://blooming-headland-5093.herokuapp.com/api/posts/:post_id

DELETE:

https://blooming-headland-5093.herokuapp.com/api/posts/:post_id

# Comments

POST (CREATE):

https://blooming-headland-5093.herokuapp.com/api/posts/:post_id/comments

GET (READ):

https://blooming-headland-5093.herokuapp.com/api/posts/:post_id/comments

https://blooming-headland-5093.herokuapp.com/api/posts/:post_id/comments/:comment_id

PUT (UPDATE):

https://blooming-headland-5093.herokuapp.com/api/posts/:post_id/comments/:comment_id

DELETE:

https://blooming-headland-5093.herokuapp.com/api/posts/:post_id/comments/:comment_id

# FAQS

What is :post_id /:comment_id ?

Ran the first get requests to get the mongo object id for either comment /post. The mongo object id is the parameter for :post_id and :comment_id


