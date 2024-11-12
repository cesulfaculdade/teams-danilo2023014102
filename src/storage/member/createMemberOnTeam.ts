import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_COLLECTION } from "@storage/storageConfig";
import { appError } from "@utils/AppError";

type MemberStorageDTO = {
    name: string;
    type: string;
    team: string;
}

export async function CreateMemberOnTime(newMember: MemberStorageDTO, team: string) {
    try {

        const storedMembers = await AsyncStorage.getItem(`${MEMBER_COLLECTION}-${team}`);

        const members: MemberStorageDTO[] = storedMembers ? JSON.parse(storedMembers) : [];

        const memberAlreadyExists = members.filter(member => member.name === newMember.name);

        if (memberAlreadyExists.length > 0){
            throw new appError("Esse membro já está adiconado.")
        }

        const storage = JSON.stringify([...members, newMember]);

        console.log(storage);

        await AsyncStorage.setItem(`${MEMBER_COLLECTION}-${team}`, JSON.stringify(newMember));
    } catch (error) {
        throw error;
    }
}