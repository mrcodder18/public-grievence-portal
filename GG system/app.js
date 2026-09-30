/* =========================================================
   🔥 1. FIREBASE CONFIGURATION (No Auth Required)
   ========================================================= */
const firebaseConfig = {
    apiKey: "PASTE_YOUR_ACTUAL_API_KEY_HERE", // Replace with your real API key
    authDomain: "maharastra-grievance.firebaseapp.com",
    projectId: "maharastra-grievance",
    storageBucket: "maharastra-grievance.appspot.com", 
    messagingSenderId: "1092085467242",
    appId: "1:1092085467242:web:a109edc4f2b2e5135ca213",
    measurementId: "G-5X0D1DLJLG"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

/* =========================================================
   🧠 2. MACHINE LEARNING MODEL (FULL DATASET)
   ========================================================= */
const trainingData = [
    // --- FIRE & EXPLOSIONS ---
    { input: "major fire broke out in residential building flames spreading", output: "High" },
    { input: "gas cylinder blast explosion in kitchen severe damage", output: "High" },
    { input: "chemical factory fire toxic black smoke suffocating", output: "High" },
    { input: "electric transformer caught fire sparks flying danger", output: "High" },
    { input: "vehicle on fire car burning on highway emergency", output: "High" },
    { input: "forest fire spreading towards village danger to life", output: "High" },
    { input: "short circuit caused massive fire in shop market area", output: "High" },
    { input: "smell of gas leak lpg cylinder hissing sound danger", output: "High" },
    { input: "fireworks factory explosion blast injuries urgent help", output: "High" },
    { input: "slum area hut caught fire spreading fast wind", output: "High" },

    // --- FLOODING & WATER DISASTERS ---
    { input: "my house is flooded water entering inside home furniture floating", output: "High" },
    { input: "ground floor submerged water logging inside bedroom kitchen", output: "High" },
    { input: "heavy rain caused flash flood water level rising dangerously", output: "High" },
    { input: "dam gates opened river overflow village flooding alert", output: "High" },
    { input: "water entered my house damage to property rescue needed", output: "High" },
    { input: "basement full of water cars submerged electricity danger", output: "High" },
    { input: "nullah overflowing water entering society compound wall broke", output: "High" },
    { input: "people stranded on roof flood water rising rescue boat needed", output: "High" },
    { input: "monsoon disaster mudslide landslide road blocked trapped", output: "High" },
    { input: "sewage water backflow inside house toilet bathroom overflowing", output: "High" },

    // --- STRUCTURAL COLLAPSE ---
    { input: "building collapsed trapped people under debris rubble", output: "High" },
    { input: "old wada wall fell on pedestrians critical injury", output: "High" },
    { input: "ceiling plaster fell on family member head injury blood", output: "High" },
    { input: "bridge crack unsafe shaking heavily about to fall", output: "High" },
    { input: "construction crane fell accident site danger", output: "High" },
    { input: "landslide on ghat road rocks falling traffic blocked", output: "High" },
    { input: "slab collapse in under construction building workers trapped", output: "High" },

    // --- MEDICAL & ACCIDENTS ---
    { input: "terrible road accident car bike crash blood head injury", output: "High" },
    { input: "person unconscious heart attack need ambulance urgent", output: "High" },
    { input: "hit and run case victim bleeding heavily road", output: "High" },
    { input: "food poisoning mid day meal school kids vomiting critical", output: "High" },
    { input: "dengue outbreak many people hospitalized platelet count low", output: "High" },
    { input: "pregnant woman labor pain ambulance not arriving emergency", output: "High" },
    { input: "snake bite venomous cobra urgent anti venom needed", output: "High" },
    { input: "wild animal leopard attack in farm injured farmer", output: "High" },
    { input: "dog bite rabies risk attacking children aggressive", output: "High" },
    { input: "electrocution shock person stuck to wire unconscious", output: "High" },

    // --- CRIME & LAW ORDER ---
    { input: "murder dead body found in bushes crime scene police", output: "High" },
    { input: "robbery in progress armed thieves gun knife weapon", output: "High" },
    { input: "woman harassment molestation attack help needed", output: "High" },
    { input: "child kidnapping attempt suspicious van near school", output: "High" },
    { input: "riot mob fighting stone pelting burning buses violence", output: "High" },
    { input: "domestic violence beating wife screaming help", output: "High" },
    { input: "thieves entered house locked room danger", output: "High" },
    { input: "suspicious bag bomb threat unclaimed object station", output: "High" },
    { input: "acid attack threat emergency protection needed", output: "High" },

    // --- ELECTRICAL DANGER ---
    { input: "live wire fallen on wet road current shock hazard", output: "High" },
    { input: "electric pole bent about to fall on house sparking", output: "High" },
    { input: "open feeder box wires exposed children playing near", output: "High" },
    { input: "high tension wire touching balcony railing shock", output: "High" },
    { input: "transformer oil leaking slippery fire risk sparks", output: "High" },

    // --- GARBAGE & SANITATION ---
    { input: "garbage dump overflowing smell stink trash not collected", output: "Medium" },
    { input: "dustbin missing waste scattered on street plastic bags", output: "Medium" },
    { input: "dead animal dog cat body lying on road foul odor rotting", output: "Medium" },
    { input: "sanitary worker not coming for 4 days rubbish piled up", output: "Medium" },
    { input: "public toilet choked dirty no water unhygienic smell", output: "Medium" },
    { input: "open drainage gutter overflowing black water mosquito breeding", output: "Medium" },
    { input: "spitting paan stains dirty public walls cleaning needed", output: "Medium" },
    { input: "urinal broken leaking bad smell bus stand", output: "Medium" },
    { input: "illegal dumping of construction debris on footpath", output: "Medium" },
    
    // --- WATER SUPPLY ---
    { input: "no water supply for 3 days dry taps tank empty", output: "Medium" },
    { input: "low water pressure not reaching first floor motor problem", output: "Medium" },
    { input: "dirty muddy water coming from tap yellow colour unsafe", output: "Medium" },
    { input: "contaminated water sewage mixing with drinking water smell", output: "Medium" },
    { input: "water meter broken leaking water wastage pipe", output: "Medium" },
    { input: "water tanker not arriving people waiting thirsty", output: "Medium" },
    { input: "pipeline leak on road gallons of water wasting", output: "Medium" },
    { input: "borewell dried up need alternative water source", output: "Medium" },

    // --- ROADS & TRAFFIC ---
    { input: "huge potholes on main road back pain accident risk", output: "Medium" },
    { input: "road surface broken tarmac removed bumpy ride suspension", output: "Medium" },
    { input: "traffic signal not working red light stuck jam chaos", output: "Medium" },
    { input: "speed breaker too high damaging car bottom illegal", output: "Medium" },
    { input: "manhole cover missing tyre stuck vehicle damaged", output: "Medium" },
    { input: "traffic congestion due to illegal parking no police", output: "Medium" },
    { input: "road construction stopped half way dust pollution", output: "Medium" },
    { input: "encroachment on road shopkeepers blocking traffic", output: "Medium" },
    { input: "divider broken crossing risky for pedestrians", output: "Medium" },
    
    // --- PESTS & ANIMALS (Non-Emergency) ---
    { input: "too many mosquitoes dengue malaria risk fogging needed", output: "Medium" },
    { input: "stray dogs chasing bikes biting kids nuisance aggressive", output: "Medium" },
    { input: "monkeys destroying roof entering kitchen menace", output: "Medium" },
    { input: "rats infestation in market destroying grains plague risk", output: "Medium" },
    { input: "pig menace in colony dirt mud smell", output: "Medium" },
    { input: "honey bee hive on building danger of stinging", output: "Medium" },
    
    // --- PUBLIC TRANSPORT ---
    { input: "bus stop shelter broken roof leaking seating damaged", output: "Medium" },
    { input: "state bus cancelled without notice students stranded", output: "Medium" },
    { input: "rude conductor not giving ticket keeping change", output: "Medium" },
    { input: "auto rickshaw meter tampering charging extra refusal", output: "Medium" },
    { input: "driver driving rashly skipping stops dangerous", output: "Medium" },
    { input: "bus breakdown frequent maintenance poor", output: "Medium" },

    // --- STREET LIGHTS & ELECTRICITY (Minor) ---
    { input: "street light flickering disco light irritating", output: "Low" },
    { input: "one bulb fused in lane dark corner night", output: "Low" },
    { input: "light timer wrong ON during day wastage electricity", output: "Low" },
    { input: "electric meter reading wrong bill high check", output: "Low" },
    { input: "pole paint peeled off rusty look ugly", output: "Low" },
    { input: "new connection meter installation delay", output: "Low" },
    { input: "voltage fluctuation slightly low dim light", output: "Low" },

    // --- GARDEN & ENVIRONMENT ---
    { input: "garden grass grown too tall cut trim needed", output: "Low" },
    { input: "dry leaves pile burning smoke pollution minor", output: "Low" },
    { input: "tree branch touching balcony cut pruning request", output: "Low" },
    { input: "park bench paint removed writing graffiti", output: "Low" },
    { input: "water fountain not working decorative showpiece", output: "Low" },
    { input: "jogging track uneven tiles broken trip hazard", output: "Low" },
    { input: "garbage bin lid broken smell slightly", output: "Low" },

    // --- NOISE & NUISANCE ---
    { input: "loud music late night party neighbor disturbance", output: "Low" },
    { input: "construction noise drilling headache day time", output: "Low" },
    { input: "illegal banner hoarding birthday poster defacement", output: "Low" },
    { input: "hawker selling vegetables on footpath walking difficult", output: "Low" },
    { input: "shopkeeper throwing wrappers on road littering", output: "Low" },
    { input: "stray cattle blocking small lane dung", output: "Low" },
    { input: "private bus parked in residential area blocking view", output: "Low" },

    // --- ADMINISTRATIVE & DOCUMENTS ---
    { input: "birth certificate spelling mistake correction name", output: "Low" },
    { input: "office staff on lunch break for 2 hours waiting", output: "Low" },
    { input: "property tax website down server error payment fail", output: "Low" },
    { input: "ration card address change process slow inquiry", output: "Low" },
    { input: "bribe demand by clerk complaint corruption", output: "Low" },
    { input: "aadhaar card center link down always", output: "Low" },
    { input: "senior citizen pension delay one month", output: "Low" },
    { input: "domicile certificate status not updating online", output: "Low" },
    { input: "voter id card photo unclear print mistake", output: "Low" },
    { input: "office closed before time staff left early", output: "Low" },

    // --- GENERAL & NEUTRAL (Training to ignore these) ---
    { input: "bad service slow response unhappy", output: "Low" },
    { input: "suggestion to improve app add dark mode", output: "Low" },
    { input: "enquiry about scheme eligibility form", output: "Low" },
    { input: "thank you for resolving previous complaint", output: "Low" },
    { input: "testing the portal hello check", output: "Low" },
    { input: "city pune district mumbai nagpur nashik", output: "Low" },
    { input: "sir madam please request complain complaint", output: "Low" },
    { input: "i want to file a grievance regarding", output: "Low" },
    { input: "what is the status of my application", output: "Low" },
    { input: "where is the office located address", output: "Low" }
];

let model = { wordCounts: { High: {}, Medium: {}, Low: {} }, classCounts: { High: 0, Medium: 0, Low: 0 }, totalDocs: 0 };

function trainModel() {
    trainingData.forEach(doc => {
        const tokens = doc.input.split(" ");
        const category = doc.output;
        model.classCounts[category]++;
        model.totalDocs++;
        tokens.forEach(word => {
            if (!model.wordCounts[category][word]) model.wordCounts[category][word] = 0;
            model.wordCounts[category][word]++;
        });
    });
}

function predictDepartment(text) {
    const t = text.toLowerCase();
    if (t.includes('fire') || t.includes('blast') || t.includes('gas') || t.includes('flood') || t.includes('rescue')) return '🔥 Fire & Disaster Mgmt';
    if (t.includes('theft') || t.includes('murder') || t.includes('crime') || t.includes('fight') || t.includes('woman')) return '👮 Police Dept';
    if (t.includes('light') || t.includes('current') || t.includes('wire') || t.includes('shock') || t.includes('pole')) return '⚡ MSEDCL (Electricity)';
    if (t.includes('garbage') || t.includes('water') || t.includes('road') || t.includes('pothole') || t.includes('drainage')) return '🏢 Municipal Corporation';
    if (t.includes('bus') || t.includes('ticket') || t.includes('driver')) return '🚌 Transport (MSRTC)';
    return '🏛️ General Admin';
}

function predictPriority(text) {
    const tokens = text.toLowerCase().split(/\s+/);
    const categories = ['High', 'Medium', 'Low'];
    let bestCategory = 'Low';
    let highestScore = -Infinity;

    categories.forEach(category => {
        let score = Math.log(model.classCounts[category] / model.totalDocs); 
        tokens.forEach(word => {
            const wordCount = model.wordCounts[category][word] || 0;
            const totalWordsInCat = Object.values(model.wordCounts[category]).reduce((a, b) => a + b, 0);
            const vocabSize = Object.keys(model.wordCounts[category]).length + 50; 
            score += Math.log((wordCount + 1) / (totalWordsInCat + vocabSize));
        });
        if (score > highestScore) { highestScore = score; bestCategory = category; }
    });
    return bestCategory;
}

trainModel();

/* =========================================================
   📱 3. SIMULATED LOGIN & UI LOGIC
   ========================================================= */
let currentUser = null;
let currentRole = 'user';
let dbUnsubscribe = null;
let feedbackUnsubscribe = null;
let globalGrievancesData = [];

// Toggle Auth Views (Switches between Login and Register)
window.toggleAuth = function(type) {
    document.getElementById('login-form').classList.toggle('hidden', type === 'register');
    document.getElementById('register-form').classList.toggle('hidden', type === 'login');
    document.getElementById('form-title').innerText = type === 'register' ? 'Register New Account' : 'Aaple Sarkar Login';
};

// Simulated Registration Logic (Just for show)
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Account created successfully! Please log in with your new credentials.");
    e.target.reset();
    toggleAuth('login'); 
});

// Simulated Login Logic
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const usernameInput = document.getElementById('login-username').value.trim();
    const passwordInput = document.getElementById('login-password').value;

    if (!usernameInput || !passwordInput) return;

    currentUser = usernameInput;
    currentRole = usernameInput.toLowerCase() === 'admin' ? 'admin' : 'user';

    document.getElementById('user-display-name').textContent = currentUser;
    document.getElementById('user-role-badge').textContent = currentRole.toUpperCase();
    document.getElementById('user-role-badge').style.background = currentRole === 'admin' ? '#c62828' : '#FF9933';

    // Show Admin-only links
    if (currentRole === 'admin') {
        document.getElementById('priority-link').classList.remove('hidden');
        document.getElementById('feedback-admin-link').classList.remove('hidden');
    } else {
        document.getElementById('priority-link').classList.add('hidden');
        document.getElementById('feedback-admin-link').classList.add('hidden');
    }

    document.getElementById('login-section').style.display = 'none';
    document.getElementById('dashboard-container').classList.remove('hidden');
    window.dispatchEvent(new Event('resize'));
    
    loadGrievances(); 
    loadAdminFeedbacks();
});

// Logout Logic
document.getElementById('logout-btn').addEventListener('click', () => {
    currentUser = null;
    if (dbUnsubscribe) dbUnsubscribe(); 
    if (feedbackUnsubscribe) feedbackUnsubscribe();
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('dashboard-container').classList.add('hidden');
    document.getElementById('login-form').reset();
    document.getElementById('login-password').value = ''; 
});

/* =========================================================
   📂 4. DATABASE OPERATIONS & UPLOAD
   ========================================================= */
document.getElementById('grievance-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const mediaFile = document.getElementById('g-media').files[0];
    const desc = document.getElementById('g-desc').value;

    if (mediaFile && mediaFile.size > (2 * 1024 * 1024)) {
        alert("File is too large! Maximum allowed size is 2MB.");
        return;
    }

    btn.innerText = `Uploading...`;
    btn.disabled = true;

    try {
        let mediaUrl = "";
        if (mediaFile) {
            const storageRef = storage.ref(`evidence/${Date.now()}_${mediaFile.name}`);
            await storageRef.put(mediaFile);
            mediaUrl = await storageRef.getDownloadURL();
        }

        await db.collection("grievances").add({
            citizen: currentUser, 
            desc: desc,
            city: document.getElementById('g-city').value,
            district: document.getElementById('g-district').value,
            priority: predictPriority(desc),
            department: predictDepartment(desc),
            mediaUrl: mediaUrl,
            status: "Pending",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            displayId: "MH-" + Math.floor(Math.random() * 10000)
        });

        alert("Grievance Submitted Successfully!");
        e.target.reset();
        document.querySelector('[data-target="previous-view"]').click();
    } catch (error) {
        alert("Database Error: Check your Firebase Config / Rules. " + error.message);
    } finally {
        btn.innerText = "Submit Complaint";
        btn.disabled = false;
    }
});

function loadGrievances() {
    if (dbUnsubscribe) dbUnsubscribe();

    let query = db.collection("grievances").orderBy("timestamp", "desc");
    
    dbUnsubscribe = query.onSnapshot((snapshot) => {
        globalGrievancesData = [];
        snapshot.forEach(doc => globalGrievancesData.push({ ...doc.data(), id: doc.id }));
        
        renderHistory(globalGrievancesData);
        updateCharts(globalGrievancesData);
        renderAllTable(globalGrievancesData); 
        
        if (currentRole === 'admin') {
            renderPriorityTable(globalGrievancesData);
        }
    });
}

function renderHistory(data) {
    const list = document.getElementById('history-list');
    list.innerHTML = '';
    
    const myData = currentRole === 'admin' ? data : data.filter(g => g.citizen === currentUser);

    if(myData.length === 0) { list.innerHTML = '<div class="empty-state">No history found.</div>'; return; }

    myData.forEach(g => {
        let sColor = g.status === 'Resolved' ? 'green' : (g.status === 'In Process' ? 'orange' : 'red');
        list.innerHTML += `
        <div class="glass-panel" style="margin-bottom:10px;">
            <div style="display:flex; justify-content:space-between;">
                <h4>${g.desc}</h4>
                <span style="color:var(--blue); font-weight:bold;">${g.priority}</span>
            </div>
            <p style="font-size:0.8rem; color:#666;">ID: ${g.displayId} | Dept: ${g.department}</p>
            <div style="margin-top:5px; font-size:0.8rem;">Status: <b style="color:${sColor}">${g.status}</b></div>
        </div>`;
    });
}

function renderAllTable(data) {
    const allBody = document.getElementById('all-grievance-body');
    allBody.innerHTML = '';
    data.forEach(g => {
        let pClass = g.priority === 'High' ? 'priority-high' : (g.priority === 'Medium' ? 'priority-medium' : 'priority-low');
        const media = g.mediaUrl ? `<a href="${g.mediaUrl}" target="_blank" class="view-media-btn"><i class="fas fa-eye"></i> View</a>` : 'None';
        
        let sClass = g.status === 'Resolved' ? 'status-resolved' : (g.status === 'In Process' ? 'status-in-process' : 'status-pending');
        let actionColumn = `<span class="${sClass}">${g.status}</span>`;

        if (currentRole === 'admin') {
            actionColumn = `
                <select onchange="window.updateStatus('${g.id}', this.value)" class="admin-select">
                    <option value="Pending" ${g.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="In Process" ${g.status === 'In Process' ? 'selected' : ''}>In Process</option>
                    <option value="Resolved" ${g.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
                </select>
                <button onclick="window.deleteGrievance('${g.id}')" class="btn-delete"><i class="fas fa-trash"></i></button>
            `;
        }
        
        allBody.innerHTML += `<tr>
            <td><b>${g.displayId}</b></td>
            <td>${g.citizen}</td>
            <td>${g.desc} <br> ${media}</td>
            <td><span class="${pClass}">${g.priority}</span></td>
            <td>${actionColumn}</td>
        </tr>`;
    });
}

function renderPriorityTable(data) {
    const priorityBody = document.getElementById('priority-grievance-body');
    priorityBody.innerHTML = '';
    
    const highPriorityData = data.filter(g => g.priority === 'High' && g.status !== 'Resolved');

    if(highPriorityData.length === 0) {
        priorityBody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:20px;">No pending high-priority issues.</td></tr>';
        return;
    }

    highPriorityData.forEach(g => {
        const media = g.mediaUrl ? `<a href="${g.mediaUrl}" target="_blank" class="view-media-btn"><i class="fas fa-eye"></i> View</a>` : 'None';
        priorityBody.innerHTML += `<tr>
            <td><b>${g.displayId}</b></td>
            <td><div>${g.desc}</div><div style="font-size:0.8rem; color:#666; margin-top:4px;">${g.city} | ${g.department}</div></td>
            <td>${media}</td>
            <td>
                <select onchange="window.updateStatus('${g.id}', this.value)" class="admin-select" style="border-color:#c62828;">
                    <option value="Pending" ${g.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="In Process" ${g.status === 'In Process' ? 'selected' : ''}>In Process</option>
                    <option value="Resolved" ${g.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
                </select>
            </td>
        </tr>`;
    });
}

window.updateStatus = function(docId, newStatus) {
    db.collection("grievances").doc(docId).update({ status: newStatus });
};
window.deleteGrievance = function(docId) {
    if(confirm("Permanently delete this grievance?")) {
        db.collection("grievances").doc(docId).delete();
    }
};

/* =========================================================
   ⭐ 5. FEEDBACK SYSTEM
   ========================================================= */

// Interactive Stars for submitting feedback
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating-value');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const val = parseInt(star.getAttribute('data-value'));
        ratingInput.value = val;
        stars.forEach(s => {
            if(parseInt(s.getAttribute('data-value')) <= val) {
                s.style.color = '#f1c40f'; // Highlight
            } else {
                s.style.color = '#ccc'; // Remove highlight
            }
        });
    });
});

// Submit Feedback to Database
document.getElementById('feedback-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const rating = ratingInput.value;
    const msg = document.getElementById('f-msg').value;

    if (rating === "0") {
        alert("Please select a star rating!");
        return;
    }

    const btn = e.target.querySelector('button');
    btn.innerText = "Submitting...";
    btn.disabled = true;

    try {
        await db.collection("feedback").add({
            user: currentUser,
            rating: parseInt(rating),
            message: msg,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        alert("Thank you for your feedback!");
        e.target.reset();
        ratingInput.value = "0";
        stars.forEach(s => s.style.color = '#ccc'); // Reset stars
        document.querySelector('[data-target="home-view"]').click();
        
    } catch (err) {
        alert("Error submitting feedback: " + err.message);
    } finally {
        btn.innerText = "Submit Feedback";
        btn.disabled = false;
    }
});

// Admin Function: Fetch and Display Feedbacks
function loadAdminFeedbacks() {
    if (currentRole !== 'admin') return; // Only Admins need to fetch this

    if (feedbackUnsubscribe) feedbackUnsubscribe();

    feedbackUnsubscribe = db.collection("feedback").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        const list = document.getElementById('admin-feedback-list');
        list.innerHTML = '';
        
        if (snapshot.empty) {
            list.innerHTML = '<div class="empty-state" style="padding: 20px;">No feedback received yet.</div>';
            return;
        }

        snapshot.forEach(doc => {
            const f = doc.data();
            
            // Build the star visual string based on the rating
            let starVisual = '';
            for(let i=1; i<=5; i++) {
                if(i <= f.rating) starVisual += '<i class="fas fa-star" style="color: #f1c40f;"></i>';
                else starVisual += '<i class="fas fa-star" style="color: #ccc;"></i>';
            }

            list.innerHTML += `
            <div class="glass-panel" style="margin-bottom:15px; padding: 15px;">
                <div style="display:flex; justify-content:space-between; align-items: center;">
                    <h4 style="color: var(--blue);"><i class="fas fa-user-circle"></i> ${f.user}</h4>
                    <div>${starVisual}</div>
                </div>
                <p style="margin-top:8px; color:#444; font-size: 0.95rem;">"${f.message}"</p>
            </div>`;
        });
    });
}

/* =========================================================
   📊 6. CHARTS & NAVIGATION
   ========================================================= */
let statusChart, priorityChart;
function updateCharts(data) {
    const resolved = data.filter(g => g.status === 'Resolved').length;
    const pending = data.filter(g => g.status === 'Pending').length;
    const inProcess = data.filter(g => g.status === 'In Process').length;

    const high = data.filter(g => g.priority === 'High').length;
    const med = data.filter(g => g.priority === 'Medium').length;
    const low = data.filter(g => g.priority === 'Low').length;

    if (statusChart) statusChart.destroy();
    if (priorityChart) priorityChart.destroy();

    const ctx1 = document.getElementById('statusChart').getContext('2d');
    statusChart = new Chart(ctx1, { 
        type: 'doughnut', 
        data: { labels: ['Resolved', 'Pending', 'In Process'], datasets: [{ data: [resolved, pending, inProcess], backgroundColor: ['#2ecc71', '#e67e22', '#f1c40f'] }] } 
    });

    const ctx2 = document.getElementById('priorityChart').getContext('2d');
    priorityChart = new Chart(ctx2, { 
        type: 'bar', 
        data: { labels: ['High', 'Medium', 'Low'], datasets: [{ label: 'Count', data: [high, med, low], backgroundColor: ['#c62828', '#f57f17', '#2e7d32'] }] } 
    });
}

// Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    const views = document.querySelectorAll('.view');
    const sidebar = document.getElementById('sidebar');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (this.id === 'logout-btn') return;
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            views.forEach(v => v.classList.remove('active-view'));
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active-view');
            if (window.innerWidth <= 768) sidebar.classList.remove('show-sidebar');
        });
    });

    document.getElementById('toggle-menu').addEventListener('click', () => sidebar.classList.add('show-sidebar'));
    document.getElementById('close-nav').addEventListener('click', () => sidebar.classList.remove('show-sidebar'));
});