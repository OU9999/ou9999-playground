export const getUrlFromSelect = (select: string) => {
  let result;

  switch (select) {
    case "id":
      result =
        "https://lh3.googleusercontent.com/fife/ALs6j_G7KxK7iB-YqAAoT3i7E4pxnnRQUhdx1K36ILRXm4vxkl7fPSoIRGKDUi0ZYT2VGQLFyVvlzedmZE27LyPCfMgl2OvRynxYgMhDxF7Crq_DVZeAElY7h6C0bypN0GDAlMJAwd9aMdMRHENPTGU6jPBKuKIwp7wimAZ8Nb1d7E2GuACuNYvwlfZvCLdhCLD1lCFJT0H-A7_DVwonicBzU-VhE6N3NRzraKJ06-Nae7_2W5g5JtVEyeQW8DwCxrQ4305UgoLuGTnDWeKVSQ3j3U60sG0xIGyGgpH0rbAJQG9np8hBl0Vw90tT45fNFNiRf8f0fySHNBzqFONGTWv1BI55sSSzobJ5Te1JvGVmSZeOnk0IN5EIGaEgS3Mn-FjxKQsDsPPxB90L5Afb4kvrCXkgHW_qApoYiyNKxX69uZU8CMghks3UmHifqlTwjug1HwTL7RFMc-kygjrLgwxqwtukgngNdH9OpmrNNhvha7oJIMBxXd7YrPfZ3TFQAjqbXlvXF-tq-TPzuo-RRYxQ9o1SzhU0nmEh0bbnt3W5q2FYJRlc7FXnbGaTgoUWPbgT0nNHRqI5zXBLiUHF5pVjDWMVnYD-ZPQfHpicOBFDLbn8lbKvWR2tHkAIWyL5f2jtWTWgew2zXwVJfwIAaL5p2PHWavL2Bf-p7yK5kBzjcgl00tJ62DVJ53UFYo2aU-kOZ-it7UVyxnr5B4oHv99qlc_tuLMQ-gZhyK8ScMsPtB6gRXd5m2ad3LdjfoYogBdgYYW-df_z8ykOEmt-LyM91Z0h5_yDcg4v2ikmRqWdjPB34nwjH-wFuLQNZ2u3B1HdW2WNS1sEEvBN84qvO7KJKCQ3BGQ9MaGa0LtGrwCuxjcb_nyZ90znKx3-ihv9xtCHaRY8j6zYy709mTqXHREpHXOxJ-oaQ2ZcME4sHK4AGRCFqNqepdhe2pB2-UYfktIeXtiWIjvhnU75LZq02x6F2XWagLqlGciUxX3HwDwOTNXd4fnXPOiX9RwBoj51bJHw157tRQBc_5E4jqNa_Myo4k-7lkS4Sq-a3jOIDbJdSak1uYaKpsL4EOJgeATgpnTk1fA9N-HIHSvWq7Hmi_GPfNZbhegyL2cGVIQ3-CJDSux7lfmQ_hGNj7S-3slpgcnMzGIy4qqFmto9JEwadPqJR6PvJVHHeZ0fBvyTo23dtKhggZ9eu-v8R_ma8m2AegmoCn_FK_0NRrlHcP4Evy-T__QVX7XAe6Qg0qAKLKKiRNaPg1y22v3Y4pNkFRBxwgUWjKgUttnN3DQ3YDzNe73WPo1hc1iIS4x-j-EEWUyyV191Pef_iK6wivia9lyYTU8zrYTLIuf1oN1Z906FfN8fauKcaiuUgoE4RDNjuwqrLRKgOVz3fTNRtTzS4rcnTzcY9fqsvzEpKhFvXRy8dqh5rKPkziqo2aMNplQWwha4wfsr43WcrHkO3TFT2EN6EtK18fuTseW3Nk2IzvLZvGob5wQKfIJm8m81MSJn7OM4KwaiNWBR7d8jlWDhswyq4mgwK9D2-RPIq4-Du1GxwcRdW2FBkWC178k-QJeykaJ36JdlwHtolQGB8Lcqiku2oO7bBxL_rSdflblEPkgRRqsyYKhqFXbMbY7ZpPU_0Cu-IM2LTlWCFx1BAXI=w3840-h1884";
      break;
    case "card":
      result = "url";
      break;
    case "driver":
      result = "url";
      break;

    default:
      result = "";
      break;
  }

  return result;
};
