import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_COLLECTION } from "@storage/storageConfig";
import { appError } from "@utils/AppError";
import { getMembersByTeam } from "./getMembersByTeam";
import { MemberStorageDTO } from "./MemberStorageDTO";


export async function createMembersOnTeam(newMember: MemberStorageDTO, team: string) {
    try {

        const members = await getMembersByTeam(team);

        const memberAlreadyExists = members.filter(member => member.type === newMember.type);

        if (memberAlreadyExists.length > 0){
            throw new appError("Esse membro já está adiconado.")
        }

        const storage = JSON.stringify([...members, newMember]);

        await AsyncStorage.setItem(`${MEMBER_COLLECTION}-${team}`, JSON.stringify(newMember));
    } catch (error) {
        throw error;
    }
}