import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchAllTeams } from "./fetchAllTeams";
import { appError } from "@utils/AppError";

export async function createTeam(newTeam: string){
    try {

        const storedTeams = await fetchAllTeams();

        const teamsAlredyExists = storedTeams.includes(newTeam);
        if (teamsAlredyExists){
            throw new appError("Já existe uma equipe com esse nome.")
        }

        const storage = JSON.stringify([... storedTeams, newTeam])
        await AsyncStorage.setItem("@cesul-teams:teams", storage);
    } catch (error) {
        throw error;
    }

}
