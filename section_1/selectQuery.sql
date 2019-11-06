SELECT *
FROM   Answers
WHERE  survey_id = '<survey_id>'
       AND panel_user_id = '<panel_user_id>'

/*
    With Surveys table join
*/
SELECT *
FROM   Answers ans
       INNER JOIN Surveys sur
               ON sur.id = ans.survey_id
WHERE  ans.survey_id = '<survey_id>'
       AND ans.panel_user_id = '<panel_user_id>'