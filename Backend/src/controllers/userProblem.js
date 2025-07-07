
const {getLanguageById,submitBatch} = require("../utils/problemUtility");

const CreateProblem = async (res,res)=>{

        const {title, description,difficulty, tags, visibleTestCases,hiddenTestCases,
                startCode,referenceSolution,problemCreator}=req.body;
        
        try{

                for(const {language,completeCode} of referenceSolution){

                        //source_code:
                        // language_id:
                        // stdin:
                        // expected_output:

                        const languageId = getLanguageById(language);//under utils
                        
                        // I am creating Batch submission ( c++ ke liye ek batch ban jaayega , fir then java ka jitne bhi test cases hn uska batch bana diya)
                        const submissions = visibleTestCases.map((input,output)=>({
                                source_code:completeCode,
                                language_id: languageId,
                                stdin: input,
                                expected_output:output
                        }));

                        const submitResult = await submitBatch(submissions);//under utils
                }
        }
        catch(err){

        }
}