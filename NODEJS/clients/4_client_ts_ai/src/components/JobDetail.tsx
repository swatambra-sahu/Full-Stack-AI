import { useState, useEffect } from "react";
import candidate from "../data/candidate";
import { Job } from "../types";
import {server_api} from "./../data/api";

interface JobDetailProps {
  jobId: string | null;
  onBack: () => void;
  token: string;
}

interface MatchResult {  
  matchScore: number;  
  aiFeedback: string;  
} 

function JobDetail({ jobId, onBack, token }: JobDetailProps) {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [applyStatus, setApplyStatus] = useState<string>("");

  const [applying, setApplying] = useState<boolean>(false);  
  const [evaluating, setEvaluating] = useState<boolean>(false);  
  const [applied, setApplied] = useState<boolean>(false);  
  const [matchResult, setMatchResult] = useState<MatchResult | null>(null);  
  const [applyError, setApplyError] = useState<string>("");  

  

  // constructor
  useEffect(() => {
    fetch(`${server_api}/api/jobs/${jobId}`, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }

    })
      .then((res) => res.json())
      .then((data: Job) => {
        setJob(data);
        setLoading(false);
      });
  }, [jobId]);

  const runMatch = async () => {  
    setApplyError("");  
    setEvaluating(true);  
    try {  
      // problem
      
      const matchRes = await fetch(server_api+"/api/candidate/match", {  
        method: "POST",  
        headers: {  
          "Content-Type": "application/json",  
          Authorization: `Bearer ${token}`  
        },  
        body: JSON.stringify({ jobId })  
      });  
      console.log("(((((((((())))))))))")
      console.log(matchRes.ok)
      const matchData = await matchRes.json();  

      if (!matchRes.ok) throw new Error(matchData.error || "AI evaluation failed");  
      setMatchResult({ matchScore: matchData.matchScore, aiFeedback: matchData.aiFeedback });  
    } catch (err) {  
      setApplyError((err as Error).message);  
    } finally {  
      setEvaluating(false);  
    }  
  }; 

  // http://localhost:3000/api/candidate/apply
  const handleApply = async () => {
    setApplying(true)
    setApplyError("");  
    console.log("========> jobId: ",jobId)
    const api = server_api+'/api/candidate/apply';
    try {
      const res = await fetch(api, {
        method: 'post',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'jobId': jobId })
      })
      const data = await res.json()

      if (!res.ok) {
        if(data.error === "Already applied to this job."){
          setApplied(true)
          await runMatch()
          return;
        } 
        throw new Error(data.error || "Could not apply.")
      }

      setApplied(true)
      await runMatch();
      setApplyStatus("Applied! Your AI feedback score will come here.")
    } catch (err) {
      setApplyStatus((err as Error).message)
    } finally{
      setApplying(false)
    }
  }

  if (loading) return <p>Loading job details...</p>;  
  if (!job) return <p>Job not found.</p>; 

  return (
    <div className="job-detail">
      <button onClick={onBack}>Back to Job List</button>
      <h2>{job && job.title}</h2>
      <p className="company-name">{job && job.company} — {job && job.location}</p>
      <p>{job && job.description}</p>
      <h4>Skills Required</h4>
      <ul>
        {(job && job.skillsRequired) && job.skillsRequired.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>

{!applied && (  
        <button onClick={handleApply} disabled={applying}>  
          {applying ? "Applying..." : "Apply Now"}  
        </button>  
      )}  
  
      {evaluating && <p className="ai-loading">Analyzing your resume against this job...</p>}  
  
      {matchResult && (  
        <div className="match-result">  
          <h4>Your AI Match Score</h4>  
          <p className="match-score">{matchResult.matchScore}/100</p>  
          <p>{matchResult.aiFeedback}</p>  
        </div>  
      )}  
  
      {applied && !matchResult && !evaluating && (  
        <button onClick={runMatch}>Retry AI Evaluation</button>  
      )}  
  
      {applyError && <p className="error-text">{applyError}</p>}  
    </div>
  );
}

export default JobDetail;  