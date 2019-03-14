# **Bamazon-Application**
This is an Amazon-like storefront CLI app created using Node.js and MySQL.


## Tools:
* MySQL
* Node.js
* javascript
* CLI

## Setting up mySQL database:
* First, I created a database called 'bamazon'
* Within my database, I created a table called 'products' and included columns for item id, product name, department, price and stock quantity
* I then added 10 random products

## Additional set up:
* In order to run the app in the terminal, you must enter the following into the command line:
    * npm install mysql 
    * npm install inquirer

## How the app works

* **When _node bamazonCustomer.js_ is run on the command line:** 
    * the list of products and their information is displayed
    * user is prompted to enter the item id # of a product they wish to purchase


![Image of start](/img1.png)


* **If an item that *is not in stock* is selected, the user is alerted that the item is no longer available and prompted to pick a new item**


![Image of start](/img2.png)


* **If the item selected is in stock, the user is then prompted to input a quantity.** 
* **If the quantity selected is available, the user will be alerted that their purchase was successful and the total cost is displayed.**


![Image of start](/img3.png)


* **When a purchase is successful, the list of products is displayed with updated quantities**


![Image of start](/img4.png)


* **Upon a successful purchase, the user is prompted to select a new item and then to select a quantity.**
    * **If a user selects *a quantity greater than the quantity in stock*, the user is alerted there is *insufficient quantity***

![Image of start](/img5.png)    


* **Users must enter one of the id #s provided, if they enter *an invalid number or word*, they are alerted and then prompted to enter a valid id #.**


![Image of start](/img6.png)    
