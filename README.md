docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest


DEFAULT REDIS PORT :-  6379 ,  8001 for gui visualization

docker ps 	=> gives the details and redis docker server id

docker exec -it (docker server id) bash
=> now we go inside docker container where the redis server is and run bash
=> now we can directly run redis code from terminal using redis-cli ....


ex: redis-cli ping  => PONG as output

now type -> redis-cli    in terminal
-> now we are directly connected to redis server, now use direct commands
like => ping  --> o/p => pong

////// S E T   AND   G E T   VALUES

set <key> <value> ====> -> naming convention => entity:id   value
	WE STORE KEY VALUE PAIRS

ex: 

set user:1 Aayush 

set user:2 Abhi

set msg:1 Hello

set location delhi

set work teaching

////  nx  => set the value only if the key does not exist

ex: set user:2 Aman nx    => if there is no user2, then only create this, else discard


/////////////////////////////////////

get user:1  	=> Aayush
get user:2	=> Abhi
get msg:1	=> Hello

//// MULTIPLE GET =>  mget

mget user:1 user:2 msg:1

///// HSET   -> Hashing

makes a hash table with values

> HSET bike:1 model raider brand tvs type 'Enduro bikes' price 4972


> HGET bike:1 model
"raider"

> HGET bike:1 price
"4972"
    
//////////// mset

mset film:1 "Dhoom" film:2 "Pushpa2"

get film:1 	=> Dhoom
get film:2	=> Pushpa2

mget film:1 film:2

# Increment and Decrement 


127.0.0.1:6379> set count 0
OK
127.0.0.1:6379> incr count		c++
(integer) 1
127.0.0.1:6379> incr count		c++
(integer) 2
127.0.0.1:6379> incr count		c++
(integer) 3
127.0.0.1:6379> incrby count 10		=> increment count by 10 -> c = c + 10
(integer) 13

decr count -> c--

#  REDIS LIST

# List:  used to implement queue and stack

# llen messages 	=> llen gives the length

# Queue	
		1. lpush-> pushes the element from the leftmost end
		2. rpush-> pushes the element from the rightmost end
		3. lpop->  pop the element from the leftmost end
		4. rpop->  pop the element from the rightmost end

LPUSH adds a new element to the head of a list; RPUSH adds to the tail.
LPOP removes and returns an element from the head of a list; RPOP does the same but from the tails of a list.
LLEN returns the length of a list.
LMOVE atomically moves elements from one list to another.
LRANGE extracts a range of elements from a list.
LTRIM reduces a list to the specified range of elements.


-> lpush messages hii 		=>hii
-> lpush messages hello		=>hello hii
-> lpush messages heyaa		=>heyaa hello hii


127.0.0.1:6379> lpush messages hey
(integer) 1
127.0.0.1:6379> lpush messages hii
(integer) 2
127.0.0.1:6379> lpush messages hello
(integer) 3
127.0.0.1:6379> rpush messages welcome
(integer) 4
127.0.0.1:6379> rpush messages coming back    ->'coming' & 'back' are inserted
(integer) 6
127.0.0.1:6379> lpop messages
"hello"
127.0.0.1:6379> rpop messages
"back"
127.0.0.1:6379> rpop messages
"coming"
127.0.0.1:6379> rpop messages
"welcome"
127.0.0.1:6379> rpop messages
"hey"
127.0.0.1:6379> rpop messages
"hii"
127.0.0.1:6379> rpop messages
(nil)

# DELETING THE ELEMENTS

# Delete the string, list or any variable

del user:1
del name
del location

# List as a  STACK

left -> push
left -> pop

# Check if a key exist or not

EXISTS key

Example: EXISTS name



# Blocking mode pop (blpop)

-> blop messages 10		=> 10 seconds wait if any data might come
it waits for 10 seconds, and even if there is no incoming data after 10 seconds then there may be issue,
but if we get any message in the 10 seconds it will pop and show on screen