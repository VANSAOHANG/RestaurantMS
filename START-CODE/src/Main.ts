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

let c = console.log
let addressRestaurant = new Address("st 2004", "Phnom Penh");
let saoSauth = new Restaurant('SaoSauth',addressRestaurant);

let manager1 = new Manager('Sauth',24,Gender.MALE)
let vichetChef = new Chef('Vichet',21,Gender.MALE);
let TimChef = new Chef('Tim',25,Gender.MALE);
let sophiemChef = new Chef('Sophiem',20,Gender.MALE);
let ounChef = new Chef('Oun',22,Gender.MALE);
let mengyiChef = new Chef('Mengyi',22,Gender.MALE);

let waiter1 = new Waiter('waiter1',25,Gender.MALE)
let waiter2 = new Waiter('waiter2',25,Gender.MALE)
let waiter3 = new Waiter('waiter3',25,Gender.MALE)
let waiter4 = new Waiter('waiter4',25,Gender.MALE)
let waiter5 = new Waiter('waiter5',25,Gender.MALE)

let phandy = new Receiptionist('Phandy',20,Gender.FEMALE);
let sarath = new Receiptionist('Sarath',22,Gender.MALE)
let t1 = new TableSquare(1);
let t2 = new TableCircle(2);
let t3 = new TableRectangle(3);

let Khy = new Customer(1);
let Seiha = new Customer(2);
let thib = new Customer(3);
let sreyLeak = new Customer(4);

saoSauth.setManager(manager1);
saoSauth.hr.addStaff(vichetChef,TimChef,sophiemChef,ounChef,mengyiChef);
saoSauth.hr.addStaff(waiter1,waiter2,waiter3,waiter4,waiter5);
saoSauth.hr.addStaff(phandy,sarath);

t1.addCustomer(Khy)
t1.addCustomer(Khy)
t1.addCustomer(thib)
saoSauth.tables.addTable(t1);
saoSauth.tables.addTable(t2);
saoSauth.tables.addTable(t3);

c(t1)
// c(saoSauth.tables)

let coca = new Drink("coca-cola", 50,2500);
let bacchus = new Drink("bacchus", 50,3000);
let sting = new Drink("sting", 50,2500);
let pepsi = new Drink("pepsi", 50,2500);
let oishi = new Drink("oishi", 50,2500);
saoSauth.menu.addDrinks(coca,bacchus,sting,pepsi,oishi);

let lok_lak = new Food("lok lak", 50,25000);
let amok = new Food("Amok", 50,1000);
let pork_rice = new Food("Pork and rice", 50,5000);
let chicken_red_curry = new Food("Chicken red curry", 50,6000);
let prahok_ktis = new Food("Prahok ktis", 50,12000);
let nhom_banh_chok = new Food("Nhom banh chok", 50,6000);
let somlor_korko = new Food("Somlor Korko", 50,5000);
saoSauth.menu.addFood(lok_lak,amok,pork_rice,chicken_red_curry,prahok_ktis,nhom_banh_chok,somlor_korko);

c(saoSauth.menu);
// c(saoSauth.menu);

