from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Brain Tumor Detection - Mock API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

class AnalyzeResponse(BaseModel):
    label: str
    confidence: float

class HistoryItem(BaseModel):
    id: str
    patient: str
    date: str
    result: str
    confidence: float

@app.post('/api/analyze', response_model=AnalyzeResponse)
async def analyze(file: UploadFile = File(...)):
    # mock processing
    return {'label': 'Negative', 'confidence': 0.92}

@app.get('/api/history', response_model=List[HistoryItem])
async def history():
    return [
        {'id': 's1', 'patient': 'John Doe', 'date': '2026-02-12', 'result': 'Negative', 'confidence': 0.92},
        {'id': 's2', 'patient': 'Jane Smith', 'date': '2026-02-10', 'result': 'Positive', 'confidence': 0.81}
    ]

@app.get('/api/patient/{id}')
async def get_patient(id: str):
    return {'id': id, 'name': 'John Doe', 'dob': '1985-08-12', 'records': []}

@app.get('/api/stats')
async def stats():
    return {'totalScans': 1240, 'positives': 78, 'recentResults': 12, 'avgConfidence': 89.4}

class LoginIn(BaseModel):
    username: str
    password: str

@app.post('/api/auth/login')
async def login(data: LoginIn):
    # mock auth
    return {'access_token': 'mock-token', 'user': {'username': data.username, 'name': 'Dr. Smith'}}
