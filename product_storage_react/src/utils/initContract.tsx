import {Contract, Wallet, JsonRpcProvider} from 'ethers';
import contractABI from '../abi/contractABI.json';

const initContract = async() => {
    const CONTRACT_ADDRESS = '0x7FeEac7336e205aFb8F2542B6A5e4D402EBEE88E';
    const PRIVATE_KEY = '0x9b3a923c00d918ef98ac64ab6ab8edad0b81e490c8c694cb197fd45784d1bcab';
    // console.log('contract', process.env.REACT_APP_CONTRACT_ADDRESS!)

    const provider = new JsonRpcProvider('HTTP://127.0.0.1:7545');
    await provider.ready;

    const _wallet = new Wallet(PRIVATE_KEY, provider);
    const _contract = new Contract(CONTRACT_ADDRESS, contractABI, _wallet);

    return _contract;
};

export default initContract;