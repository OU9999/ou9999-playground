interface Agent {
  name: string;
  role: string;
  from: string;
  to: string;
}

export const agentData: Agent[] = [
  { name: "jett", from: "#5A8E9B", to: "#21324B", role: "duelist" },
  { name: "viper", from: "#5C9655", to: "#121B1E", role: "controller" },
  { name: "astra", from: "#96558B", to: "#29114F", role: "controller" },
  { name: "neon", from: "#6B569D", to: "#1E1D43", role: "duelist" },
  { name: "omen", from: "#394B7D", to: "#1F253C", role: "controller" },
  { name: "phoenix", from: "#85683E", to: "#8C4A3D", role: "duelist" },
  { name: "reyna", from: "#7F434F", to: "#2C1839", role: "duelist" },
  { name: "sage", from: "#489587", to: "#274953", role: "sentinel" },
  { name: "skye", from: "#609060", to: "#524435", role: "initiator" },
  { name: "sova", from: "#957D6B", to: "#14192A", role: "initiator" },
  { name: "viper", from: "#5C9655", to: "#121B1E", role: "controller" },
  { name: "yoru", from: "#3F6698", to: "#181432", role: "duelist" },
  { name: "raze", from: "#946E37", to: "#553D36", role: "duelist" },
  { name: "killjoy", from: "#927C0A", to: "#483A34", role: "sentinel" },
  { name: "kay-o", from: "#37969A", to: "#18273B", role: "initiator" },
  { name: "fade", from: "#6F384B", to: "#1C3042", role: "initiator" },
  { name: "cypher", from: "#896558", to: "#252C49", role: "sentinel" },
  { name: "chamber", from: "#958551", to: "#2C2521", role: "sentinel" },
  { name: "brimstone", from: "#936337", to: "#2A1A1F", role: "controller" },
  { name: "breach", from: "#94652E", to: "#3C2822", role: "initiator" },
];
