import { Address } from "./Address";
import { Restaurant } from "./Restaurant";

let c = console.log
let saoSauth = new Restaurant('SaoSauth');
let address = new Address("st 2004", "Phnom Penh");
saoSauth.setRestaurantAddress(address);

c(saoSauth)