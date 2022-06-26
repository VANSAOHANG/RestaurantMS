import { Address } from "./Address";
import { Restaurant } from "./Restaurant";

let c = console.log
let address = new Address("st 2004", "Phnom Penh");
let saoSauth = new Restaurant('SaoSauth',address);

c(saoSauth)