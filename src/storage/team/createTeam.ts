import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchAllTeams } from "./fetchAllTeams";

export async function createTeam(newTeam: string){
    try {

        const storedTeams = await fetchAllTeams();

        const storage = JSON.stringify([... storedTeams, newTeam])
        await AsyncStorage.setItem("@cesul-teams:teams", storage);
    } catch (error) {
        throw error;
    }

}
