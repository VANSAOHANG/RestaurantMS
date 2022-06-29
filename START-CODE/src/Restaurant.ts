import { Address } from "./Address";
import { HumanManagement } from "./human/HumanManagement";
import { Manager } from "./human/Staff/Manager";
import { OrderManagement } from "./order/OrderManagement";
import { TableManager } from "./order/table/TableManagement";
import { Food } from "./stock/menu/foods/food";
import { Menu } from "./stock/menu/Menu";


export class Restaurant {
    constructor(private name: string,private address?:Address) { }
    private manager?:Manager;
    setRestaurantAddress(address:Address){
        this.address = address;
    }
    public hr:HumanManagement = new HumanManagement();
    public tables:TableManager = new TableManager();
    public menu:Menu = new Menu();
    public order:OrderManagement = new OrderManagement()

    // debitQuantityItem(){
    //     let orders = this.order.getCustomersOrder();
    //     for (let order of orders){
    //         let ordered = order.getOrderItem().getOrderItem();
    //         for (let item of ordered){
    //             for (let menu of this.menu.getBeverages()){
    //                 if (menu.getName() === item.getName()){
    //                     menu['quantity'] = menu.getQuantity() - item.getQuantity();
                         
    //                 }
    //             }
    //         }

    //         return this.menu;
    //     }
    // }
    setManager(newManager:Manager){
        this.manager = newManager;
    }
}