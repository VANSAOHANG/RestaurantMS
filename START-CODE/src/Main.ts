import { Address } from "./Address";
import { Gender } from "./human/Person";
import { Chef } from "./human/Staff/Chef";
import { Manager } from "./human/Staff/Manager";
import { Receiptionist } from "./human/Staff/Receptionist";
import { Waiter } from "./human/Staff/Waiter";
import { TableSquare } from "./order/table/tableCategory/TableSquare";
import { TableCircle } from "./order/table/tableCategory/TableCircle";
import { TableRectangle } from "./order/table/tableCategory/TableRectangle";

import { Restaurant } from "./Restaurant";
import { Customer } from "./human/customer/Customer";
import { Drink } from "./stock/menu/beverages/Drink";
import { Food } from "./stock/menu/foods/food";
import { Order } from "./order/Order";
import { Dessert } from "./stock/menu/dessert/Dessert";
import { OrderItem } from "./order/OrderItem";

let c = console.log
let addressRestaurant = new Address("st 2004", "Phnom Penh");
let restaurant = new Restaurant("M'hob Srok K'nhom" ,addressRestaurant);

// MANAGER------------------------------------------------
let manager1 = new Manager('Vansao Hang',24,Gender.MALE);
manager1.setSalary(7000) // Currency in dollars

// CHEF ------------------------------------------------
let vichetChef = new Chef('Vichet',21,Gender.MALE);
vichetChef.setSalary(350);
let TimChef = new Chef('Tim',25,Gender.MALE);
TimChef.setSalary(350);
let sophiemChef = new Chef('Sophiem',20,Gender.MALE);
sophiemChef.setSalary(350);

// WAITER----------------------------------------------
let waiter1 = new Waiter('waiter1',25,Gender.MALE)
let waiter2 = new Waiter('waiter2',25,Gender.MALE)

// RECEIPTIONIST------------------------------------
let phandy = new Receiptionist('Phandy',20,Gender.FEMALE);
let sarath = new Receiptionist('Sarath',22,Gender.MALE)

restaurant.setManager(manager1);
// show manager in restaurant--------------------------
// c(restaurant.getManager());

// add staff to restaurant------------------------------
restaurant.hr.addStaff(vichetChef,TimChef,sophiemChef);
restaurant.hr.addStaff(waiter1,waiter2);
restaurant.hr.addStaff(phandy,sarath);

// show all staffs in restaurant-----------------------------------------
// c(restaurant.hr.getStaffs());
c(restaurant.hr.getTotalStaff());

// TABLE -------------------------------------------------
let t1 = new TableSquare(1);
let t2 = new TableCircle(2);
let t3 = new TableRectangle(3);

// CUSTOMER-----------------------------------------------
let Khy = new Customer(1);
let Seiha = new Customer(2);
let thib = new Customer(3);
let sreyLeak = new Customer(4);



restaurant.hr.addCustomer(Khy,thib);
restaurant.tables.addTable(t1);
restaurant.tables.addTable(t2);
restaurant.tables.addTable(t3);

// get the first table free---------------------------------------
// c(restaurant.tables.getFirstFreeTable());

t1.addCustomer(Khy)
t1.addCustomer(Khy)
t2.addCustomer(thib)

// MENU CATEGORIES------------------------------------------------------------
//  Currency is  Riel----------------------------------------------------------
let coca = new Drink("coca-cola", 50,2500);
let bacchus = new Drink("bacchus", 50,3000);
let sting = new Drink("sting", 50,2500);
let pepsi = new Drink("pepsi", 50,2500);
let oishi = new Drink("oishi", 50,2500);
restaurant.menu.addItem(coca,bacchus,sting,pepsi,oishi);

let lok_lak = new Food("lok lak", 50,25000);
let amok = new Food("Amok", 50,1000);
let pork_rice = new Food("Pork and rice", 50,5000);
let chicken_red_curry = new Food("Chicken red curry", 50,6000);
let prahok_ktis = new Food("Prahok ktis", 50,12000);
let nhom_banh_chok = new Food("Nhom banh chok", 50,6000);
let somlor_korko = new Food("Somlor Korko", 50,5000);

restaurant.menu.addItem(lok_lak,amok,pork_rice,chicken_red_curry,prahok_ktis,nhom_banh_chok,somlor_korko);
// SHOW ALL ITEMS IN STOCK--------------------------------------------
c("------------------------These are what we have in our stock-----------------------");
// c(restaurant.menu.getItem());

let item1 = new Drink('coca-cola',2,2500);
let item3 = new Drink('oishi',2,2500);
let item2 = new Food('Somlor Korko',1,5000);

// MAKE ORDER----------------------------------------------------------------
let orderItem = new OrderItem();
orderItem.addItem(item1,item3,item2);
let order1 = new Order(1,orderItem,t1);
let order2 = new Order(2,orderItem,t2);
restaurant.order.makeOrder(order1);
restaurant.order.makeOrder(order2);

// show customer who come in restaurant------------------------------------
// c(restaurant.hr.getCustomers());


// show customer order_____________________________________________
c(restaurant.order.getCustomersOrder());

// calculate customer bill--------------------------------------------
// c(restaurant.cashier.calculateBill(1,order1));

// Debit the quantity of item after customer ordered---------------------------------
restaurant.debitQuantityItem();
// c(restaurant.menu.getItem());
