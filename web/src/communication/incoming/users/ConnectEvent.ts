import HotelManager from "../../../HabboHotel/HotelManager";
import Connection from "../../Connection";
import Packet from "../Packet";
import PacketEvent from "../PacketEvent";

class ConnectEvent implements PacketEvent {
    async execute(_connection: Connection, packet: Packet): Promise<void> {
        HotelManager.getUserManager().setConnected(await packet.readBoolean());

        const header = HotelManager.getUIManager().getComponentsManager().getComponent('header');
        if (header) {
            header.build();
        }
    }
}

export default ConnectEvent;
