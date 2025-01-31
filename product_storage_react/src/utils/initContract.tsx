import {Contract, Wallet, JsonRpcProvider} from 'ethers';
import contractABI from '../abi/contractABI.json';
import '../.env';

const initContract = async() => {
    const MOONBASE_ALPHA_RPC_URL = process.env.MOONBASE_ALPHA_RPC_URL!;
    const CONTRACT_ADDRESS = process.env.METAMASK_MOONBEAM_APLPHA_CONTRACT_ADDRESS!;
    const PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY!;

    const provider = new JsonRpcProvider(MOONBASE_ALPHA_RPC_URL);
    await provider.ready;

    const _wallet = new Wallet(PRIVATE_KEY, provider);
    const _contract = new Contract(CONTRACT_ADDRESS, contractABI, _wallet);

    return _contract;
};

export default initContract;