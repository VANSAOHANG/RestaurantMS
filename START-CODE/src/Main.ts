import { Address } from "./Address";
import { Gender } from "./human/Person";
import { Chef } from "./human/Staff/Chef";
import { Manager } from "./human/Staff/Manager";
import { Receiptionist } from "./human/Staff/Receptionist";
import { Waiter } from "./human/Staff/Waiter";
import { TableSquare } from "./order/table/tableCategory/TableSquare";

import { Restaurant } from "./Restaurant";

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

saoSauth.setManager(manager1);
saoSauth.hr.addStaff(vichetChef,TimChef,sophiemChef,ounChef,mengyiChef)
saoSauth.hr.addStaff(waiter1,waiter2,waiter3,waiter4,waiter5)
saoSauth.hr.addStaff(phandy,sarath)
// c(saoSauth.hr)
let t1 = new TableSquare(1);
// c(t1)
saoSauth.tables.addTable(t1);
c(saoSauth.tables)
