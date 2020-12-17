import { setConnected } from "../../../data/actions/client/userActions";
import clientStore from "../../../data/stores/clientStore";
import Connection from "../../Connection";
import Packet from "../Packet";
import PacketEvent from "../PacketEvent";

class ConnectEvent implements PacketEvent {
    async execute(_connection: Connection, _packet: Packet): Promise<void> {
        clientStore.dispatch(setConnected(true));
    }
}

export default ConnectEvent;