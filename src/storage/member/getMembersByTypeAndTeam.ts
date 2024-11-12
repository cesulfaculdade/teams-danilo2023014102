import { getMembersByTeam } from "./getMembersByTeam";

export async function getMembersByTypeAndTeam (team: string, type: string){
    try {
        const storedMembers = await getMembersByTeam(team);

        const members = storedMembers.filter(member => member.type === type)

        return members;
    } catch (error) {
        throw error;
    }
}