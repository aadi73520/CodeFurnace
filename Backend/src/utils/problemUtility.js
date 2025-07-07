const axios = require('axios');

const getLanguageById = (lang)=>{

        const language = {
                "c++":54,
                "java":62,
                "javascript":63
        }

        return language[lang.toLowerCase()];//C++,JAVA
}

const submitBatch = async (submissions) =>{//inside this function content copy from -- create a batch submission -> Target:Node.js   type:axios 
                const options = {
                method: 'POST',
                url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
                params: {
                  base64_encoded: 'true'
                },
                headers: {
                  'x-rapidapi-key': '787c9924ffmsh20b5590d30430d5p1b8153jsne98931eed76d',
                  'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                  'Content-Type': 'application/json'
                },
                data: {//submissions already created
                  submissions
                }
              };
              
              async function fetchData() {
                      try {
                              const response = await axios.request(options);
                        //       console.log(response.data);
                                return response.data;
                      } catch (error) {
                              console.error(error);
                      }
              }
              
        //       fetchData();
        return await fetchData();        
}

module.exports  = {getLanguageById,submitBatch};

