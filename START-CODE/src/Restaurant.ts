import { Address } from "./Address";
import { HumanManagement } from "./human/HumanManagement";
import { Manager } from "./human/Staff/Manager";
import { OrderManagement } from "./order/OrderManagement";
import { TableManager } from "./order/table/TableManagement";
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
    public order:OrderManagement = new OrderManagement();

    // debitQuantityItem(){
    //     let orders = this.order.getCustomersOrder();
    //     for (let order of orders){
    //         let ordered = order.getOrderItem();
    //         for (let item of ordered.getOrderItem()){
    //             for (let stockItem of this.menu.getItemByCategory()){
    //                 if (stockItem.isEqual(item)){
    //                     stockItem.debitQuantity(item.getQuantity());
    //                 }
    //             }
    //         }
    //     }
    //     return this.menu;
    // }
    setManager(newManager:Manager){
        this.manager = newManager;
    }
}