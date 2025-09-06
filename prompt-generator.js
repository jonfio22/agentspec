class PromptGenerator {
    constructor(agent) {
        this.agent = agent;
    }

    generate() {
        if (this.agent.type === 'agent') {
            return this.generateAgentPrompt();
        } else {
            return this.generateTeamPrompt();
        }
    }

    generateAgentPrompt() {
        let prompt = "**Role:** You are a senior software engineer specializing in AI agent development.\n\n";
        prompt += "**Objective:** Create a detailed and well-structured AI agent based on the following specifications.\n\n";
        prompt += `**Agent Name:** ${this.agent.name}\n`;
        prompt += `**Base:** ${this.agent.base}\n`;
        prompt += `**Personality:** ${this.agent.personality}\n`;
        prompt += `**Skills:**\n`;
        this.agent.skills.forEach(skill => {
            prompt += `- ${skill}\n`;
        });

        prompt += `\n**Instructions:**\n`;
        prompt += `1.  **Framework:** Use the most appropriate framework for this type of agent (e.g., Langchain, Pydantic, etc.).\n`;
        prompt += `2.  **Code Structure:** Create a clean and modular code structure.\n`;
        prompt += `3.  **Error Handling:** Implement robust error handling.\n`;
        prompt += `4.  **Documentation:** Add clear and concise documentation to the code.\n`;

        return prompt;
    }

    generateTeamPrompt() {
        let prompt = "**Role:** You are a senior software engineer specializing in AI agent development.\n\n";
        prompt += "**Objective:** Create a team of collaborating AI agents based on the following specifications.\n\n";
        prompt += `**Team Name:** ${this.agent.name}\n`;
        prompt += `**Collaboration Model:** ${this.agent.team_collaboration.replace('_', ' ')}\n\n`;
        prompt += `Create a team of 3 agents with the following roles and skills:\n\n`;
        const roles = ['Researcher', 'Writer', 'Reviewer'];
        for (let i = 0; i < 3; i++) {
            prompt += `**Agent ${i + 1}: ${roles[i]}**\n`;
            prompt += `- **Base:** ${this.agent.base}\n`;
            prompt += `- **Personality:** ${this.agent.personality}\n`;
            prompt += `- **Skill:** ${this.agent.skills[i] ? this.agent.skills[i] : 'a specific skill'}\n\n`;
        }

        prompt += `\n**Instructions:**\n`;
        prompt += `1.  **Framework:** Use the most appropriate framework for this type of agent team (e.g., Langchain, Pydantic, etc.).\n`;
        prompt += `2.  **Communication:** Implement a clear and efficient communication protocol between the agents.\n`;
        prompt += `3.  **Code Structure:** Create a clean and modular code structure for each agent.\n`;
        prompt += `4.  **Error Handling:** Implement robust error handling for each agent and for the team as a whole.\n`;
        prompt += `5.  **Documentation:** Add clear and concise documentation to the code.\n`;

        return prompt;
    }
}
