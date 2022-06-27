import { Address } from "./Address";
import { Gender } from "./HumanManager/Person";
import { Cheft } from "./HumanManager/Staff/Chef";
import { Manager } from "./HumanManager/Staff/Manager";
import { Receiptionist } from "./HumanManager/Staff/Receptionist";
import { Waiter } from "./HumanManager/Staff/Waiter";
import { Restaurant } from "./Restaurant";

let c = console.log
let addressRestaurant = new Address("st 2004", "Phnom Penh");
let saoSauth = new Restaurant('SaoSauth',addressRestaurant);

let manager1 = new Manager('Sauth',24,Gender.MALE)
let vichetCheft = new Cheft('Vichet',21,Gender.MALE);
let TimCheft = new Cheft('Tim',25,Gender.MALE);
let sophiemCheft = new Cheft('Sophiem',20,Gender.MALE);
let ounCheft = new Cheft('Oun',22,Gender.MALE);
let mengyiCheft = new Cheft('Mengyi',22,Gender.MALE);

let waiter1 = new Waiter('waiter1',25,Gender.MALE)
let waiter2 = new Waiter('waiter2',25,Gender.MALE)
let waiter3 = new Waiter('waiter3',25,Gender.MALE)
let waiter4 = new Waiter('waiter4',25,Gender.MALE)
let waiter5 = new Waiter('waiter5',25,Gender.MALE)

let phandy = new Receiptionist('Phandy',20,Gender.FEMALE);
let sarath = new Receiptionist('Sarath',22,Gender.MALE)

saoSauth.setManager(manager1);
saoSauth.hr.addStaff(vichetCheft,TimCheft,sophiemCheft,ounCheft,mengyiCheft)
saoSauth.hr.addStaff(waiter1,waiter2,waiter3,waiter4,waiter5)
saoSauth.hr.addStaff(phandy,sarath)
c(saoSauth.hr)
