# Hansen-gift-from-daddy-
❤️💗 
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>حنين ويوسف ♾️ هدية الروح والأغنية</title>
    <!-- Google Fonts & Font Awesome -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Three.js -->
    <script type="importmap">
        {
            "imports": {
                "three": "https://unpkg.com/three@0.128.0/build/three.module.js"
            }
        }
    </script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            user-select: none;
        }

        body {
            font-family: 'Cairo', 'Tajawal', sans-serif;
            background: #0a0718;
            overflow-x: hidden;
            color: #f5e6d3;
            min-height: 100vh;
            position: relative;
        }

        #canvas-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.9;
        }

        .content {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem 1.5rem 4rem;
            backdrop-filter: blur(3px);
        }

        .grand-card {
            max-width: 850px;
            width: 100%;
            background: rgba(20, 12, 36, 0.55);
            backdrop-filter: blur(12px);
            border-radius: 68px;
            border: 1px solid rgba(255, 215, 0, 0.5);
            box-shadow: 0 30px 50px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 215, 0, 0.2) inset, 0 0 20px rgba(255, 215, 0, 0.3);
            padding: 2rem 2rem 3rem;
            transition: all 0.4s ease;
            animation: floatCard 6s infinite alternate ease-in-out;
        }

        @keyframes floatCard {
            0% { transform: translateY(0px); box-shadow: 0 30px 50px rgba(0,0,0,0.5);}
            100% { transform: translateY(-15px); box-shadow: 0 50px 70px rgba(0,0,0,0.7), 0 0 0 3px rgba(255,215,0,0.4) inset;}
        }

        .royal-names {
            text-align: center;
            margin-bottom: 2rem;
            border-bottom: 2px dashed rgba(255, 215, 0, 0.6);
            padding-bottom: 1rem;
        }
        .royal-names h1 {
            font-size: 3.5rem;
            font-weight: 900;
            background: linear-gradient(135deg, #FFD966, #FFB347, #FFD700);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 15px rgba(255,215,0,0.5);
            letter-spacing: 2px;
        }
        .royal-names h1 span {
            font-size: 2.8rem;
            display: inline-block;
            animation: pulseLove 2s infinite;
        }
        @keyframes pulseLove {
            0% { transform: scale(1); text-shadow: 0 0 0px gold;}
            100% { transform: scale(1.08); text-shadow: 0 0 15px rgb(255, 174, 0);}
        }
        .royal-names p {
            font-size: 1.3rem;
            color: #ffdfae;
            font-weight: 500;
            letter-spacing: 2px;
        }

        .days-counter {
            background: linear-gradient(145deg, #2a1e3c, #130c1f);
            border-radius: 100px;
            padding: 0.6rem 1.5rem;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin: 20px auto;
            border: 1px solid #ffd966;
            box-shadow: 0 0 20px rgba(255, 220, 100, 0.4);
            width: fit-content;
        }
        .days-counter i {
            font-size: 2rem;
            color: #ffc857;
            animation: spinHeart 1.8s infinite;
        }
        @keyframes spinHeart {
            0% { transform: rotate(0deg) scale(1);}
            50% { transform: rotate(10deg) scale(1.2); color: #ff9f4a;}
            100% { transform: rotate(0deg) scale(1);}
        }
        .days-number {
            font-size: 3rem;
            font-weight: 900;
            font-family: monospace;
            background: linear-gradient(45deg, #FFF2B5, #FFC107);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 8px #ffb347;
            letter-spacing: 5px;
        }
        .days-text {
            font-size: 1.8rem;
            font-weight: bold;
            color: #ffdd99;
        }

        .love-letter {
            background: rgba(0, 0, 0, 0.45);
            border-radius: 48px;
            padding: 2rem 1.8rem;
            margin: 1.8rem 0;
            border-right: 6px solid #ffbe5e;
            border-left: 2px solid rgba(255, 200, 100, 0.4);
            transition: 0.3s;
            line-height: 1.9;
            font-size: 1.25rem;
            font-weight: 500;
            color: #fff3e0;
            text-shadow: 0 1px 2px black;
            box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }
        .love-letter p {
            margin-bottom: 1.2rem;
        }
        .special-name {
            font-size: 1.8rem;
            font-weight: 800;
            display: inline-block;
            color: #ffcf8a;
            background: rgba(0,0,0,0.5);
            border-radius: 40px;
            padding: 0 10px;
            transform: rotate(-2deg);
        }
        .glow-text {
            font-size: 1.6rem;
            font-weight: 800;
            background: linear-gradient(120deg, #fff0c0, #ffc285);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gentleGlow 2s infinite alternate;
        }
        @keyframes gentleGlow {
            from { text-shadow: 0 0 0px rgba(255,200,0,0);}
            to { text-shadow: 0 0 12px rgba(255,180,50,0.8);}
        }

        .dua-section {
            background: radial-gradient(circle at 10% 30%, rgba(107, 70, 193, 0.3), rgba(0,0,0,0.5));
            border-radius: 50px;
            padding: 1.2rem;
            margin-top: 1.5rem;
            text-align: center;
            font-weight: 600;
            border: 1px solid #ddb86a;
        }

        .eternal-button {
            background: linear-gradient(95deg, #b47c2e, #ffcd7e);
            border: none;
            padding: 14px 28px;
            border-radius: 60px;
            color: #1f102f;
            font-weight: bold;
            font-size: 1.3rem;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 20px;
            box-shadow: 0 8px 14px rgba(0,0,0,0.4);
            display: inline-flex;
            align-items: center;
            gap: 12px;
        }
        .eternal-button:hover {
            transform: scale(1.05);
            background: linear-gradient(95deg, #ffc864, #ffea9e);
            box-shadow: 0 0 25px rgba(255, 215, 0, 0.7);
        }
        .heart-drop {
            position: fixed;
            top: -10vh;
            font-size: 1.4rem;
            z-index: 999;
            pointer-events: none;
            opacity: 0.8;
            animation: fallLove linear forwards;
        }
        @keyframes fallLove {
            0% { transform: translateY(0) rotate(0deg); opacity: 1;}
            100% { transform: translateY(110vh) rotate(360deg); opacity: 0;}
        }
        .signature {
            text-align: center;
            margin-top: 30px;
            font-size: 1.2rem;
            font-weight: 400;
            border-top: 1px dashed #ffcd94;
            padding-top: 20px;
        }
        /* زر الموسيقى الأنيق */
        .music-control {
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 9999;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(10px);
            border-radius: 60px;
            padding: 12px 20px;
            border: 1px solid #ffcd7e;
            box-shadow: 0 0 15px rgba(255,200,0,0.4);
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            transition: all 0.3s;
            font-family: 'Cairo', sans-serif;
            font-weight: bold;
        }
        .music-control:hover {
            transform: scale(1.05);
            background: rgba(0,0,0,0.9);
            border-color: #ffdfaa;
        }
        .music-control i {
            font-size: 1.8rem;
            color: #ffc857;
        }
        .music-status {
            font-size: 0.9rem;
            color: #ffefcf;
        }

        @media (max-width: 650px) {
            .grand-card { padding: 1.2rem; }
            .royal-names h1 { font-size: 2.4rem; }
            .love-letter { font-size: 1rem; padding: 1.2rem; }
            .days-number { font-size: 2rem; }
            .music-control { bottom: 12px; right: 12px; padding: 8px 14px; }
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #1f1433; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(#ffcd7e, #aa7733); border-radius: 10px; }
    </style>
</head>
<body>

<div id="canvas-container"></div>

<div class="content">
    <div class="grand-card">
        <div class="royal-names">
            <h1>✨ حَنين &nbsp;♡&nbsp; يُوسُف ✨</h1>
            <p><i class="fas fa-infinity"></i> قصة حب لا تُروى إلا بالذهب <i class="fas fa-crown"></i></p>
        </div>

        <div style="display: flex; justify-content: center;">
            <div class="days-counter">
                <i class="fas fa-heartbeat"></i>
                <span class="days-number">108</span>
                <span class="days-text">يَوْم</span>
                <i class="fas fa-calendar-alt"></i>
            </div>
        </div>
        
        <div class="love-letter">
            <p><span class="special-name">✨ نونتي ✨</span> .. <strong class="glow-text">❤️ أنا بحبك أوي بجد ❤️</strong> 🤍<i class="fas fa-heart" style="color:#ffaa66;"></i> </p>
            <p>🤲 <strong>رنا يخليكي ليا</strong> .. أنا بعشقك جدا 🥺💫</p>
            <p>عَلَى فِكْرَة .. قربنا أوي من بعض الفترة دي 💞 بقيت متعلق بيكي كأنك <span style="color:#ffb668;font-weight:900;">"نونه"</span> كدهُووو 💖</p>
            <p>وَأَنَا <span class="special-name">بابيييييييي</span> نفسي فيكي أوي 🤍🔥 <i class="fas fa-heart-broken" style="transform: rotate(180deg);"></i> </p>
            <p>🤲 <i class="fas fa-hands-praying"></i> <strong style="font-size:1.3rem;">يارب يخليكي ليا يارب وميحرمنا من بعض</strong> 🤲</p>
            <p>🌙 <strong>وَيَسّرلنا الدنيا يارب ويوفقنا ويقربنا من بعض أكتر وأكتر</strong> 🌙</p>
            <p>🕊️ وميخلون في مشاكل بينا أبداً 🤍 ينجحك ويعديكي من الإمتحانات دي يارب 🤍📖</p>
            <p class="dua-section"><i class="fas fa-star-of-life"></i> عدد الأيام اللي نورتِ حياتي: <span style="font-size:2rem; font-weight:bold; background:goldenrod; -webkit-background-clip:text; background-clip:text; color:transparent;">108</span> يوم من النعيم ✨</p>
            <p style="margin-top: 18px; text-align: center;">❤️‍🔥 <span style="font-size:1.6rem;">"يوسف & حنين"</span> للأبد ❤️‍🔥</p>
        </div>
        
        <div style="text-align: center; margin: 10px 0;">
            <div style="background: rgba(255,215,0,0.15); border-radius: 50px; padding: 12px;">
                <i class="fas fa-feather-alt"></i>  أنتِ نبضي و كل عمري .. نونتي الصغيرة وأكبر حب  <i class="fas fa-feather-alt"></i>
            </div>
        </div>
        
        <div style="display: flex; justify-content: center;">
            <button class="eternal-button" id="heartRainBtn"><i class="fas fa-gem"></i> أُحِبُكِ إلى الأبد <i class="fas fa-heart"></i></button>
        </div>
        
        <div class="signature">
            <i class="fas fa-pen-fancy"></i> رسالة من قلب يوسف إلى روح حنين .. كل يوم بحبكِ أكثر من 108 يوم من الضوء ✨
        </div>
    </div>
</div>

<!-- زر الموسيقى + الأغنية -->
<div class="music-control" id="musicToggleBtn">
    <i class="fas fa-music" id="musicIcon"></i>
    <span class="music-status" id="musicStatusText">شغّل الأغنية 🎵</span>
</div>

<audio id="bgAudio" loop preload="auto">
    <source src="https://www.image2url.com/r2/default/files/1780677145758-8e39fc6a-d069-480d-ac2c-37aaf1ce9140.mp3" type="audio/mpeg">
    متصفحك لا يدعم تشغيل الصوت.
</audio>

<script type="module">
    import * as THREE from 'three';

    const container = document.getElementById('canvas-container');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050210);
    scene.fog = new THREE.FogExp2(0x050210, 0.0012);
    
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 4, 18);
    camera.lookAt(0, 0, 0);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    const mainLight = new THREE.DirectionalLight(0xffddaa, 1.2);
    mainLight.position.set(5, 10, 7);
    scene.add(mainLight);
    const backLight = new THREE.PointLight(0xff66aa, 0.5);
    backLight.position.set(-3, 2, -6);
    scene.add(backLight);
    const goldLight = new THREE.PointLight(0xffaa55, 0.8);
    goldLight.position.set(2, 3, 4);
    scene.add(goldLight);
    
    const starCount = 1800;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
        starPositions[i*3] = (Math.random() - 0.5) * 200;
        starPositions[i*3+1] = (Math.random() - 0.5) * 100;
        starPositions[i*3+2] = (Math.random() - 0.5) * 80 - 40;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffdd99, size: 0.12, transparent: true, opacity: 0.7 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    const particleCount = 800;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = [];
    for (let i = 0; i < particleCount; i++) {
        particlePos.push((Math.random() - 0.5) * 35);
        particlePos.push((Math.random() - 0.5) * 20);
        particlePos.push((Math.random() - 0.5) * 25 - 10);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(particlePos), 3));
    const particleMat = new THREE.PointsMaterial({ color: 0xffaa77, size: 0.08, transparent: true, blending: THREE.AdditiveBlending });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);
    
    const orbGroup = [];
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffaa55, emissive: 0x442200, roughness: 0.3, metalness: 0.85 });
    for (let i = 0; i < 30; i++) {
        const orb = new THREE.Mesh(new THREE.SphereGeometry(0.12 + Math.random()*0.1, 16, 16), goldMat);
        orb.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 15 - 8);
        scene.add(orb);
        orbGroup.push(orb);
    }
    
    const helixPoints = [];
    const helixMat = new THREE.PointsMaterial({ color: 0xffcc88, size: 0.09 });
    for (let i = 0; i <= 500; i++) {
        const t = i / 50;
        const x = Math.sin(t * 1.8) * 3.2;
        const y = Math.cos(t * 1.2) * 1.5 + Math.sin(t * 0.7) * 1;
        const z = Math.cos(t * 1.8) * 3.2;
        helixPoints.push(new THREE.Vector3(x, y + 1.2, z));
    }
    const helixGeo = new THREE.BufferGeometry().setFromPoints(helixPoints);
    const helixObj = new THREE.Points(helixGeo, helixMat);
    scene.add(helixObj);
    
    let time = 0;
    function animate3D() {
        requestAnimationFrame(animate3D);
        time += 0.008;
        stars.rotation.y = time * 0.05;
        stars.rotation.x = Math.sin(time * 0.1) * 0.1;
        particleSystem.rotation.y = time * 0.02;
        particleSystem.rotation.x = Math.sin(time * 0.2) * 0.1;
        helixObj.rotation.y = time * 0.3;
        helixObj.rotation.x = Math.sin(time * 0.5) * 0.2;
        orbGroup.forEach((orb, idx) => {
            orb.position.y += Math.sin(time * 1.3 + idx) * 0.003;
            orb.position.x += Math.cos(time * 1.1 + idx) * 0.002;
        });
        camera.position.x += (0 - camera.position.x) * 0.02;
        camera.position.y += (Math.sin(time * 0.2) * 0.2 - camera.position.y) * 0.03;
        camera.lookAt(0, 1, 0);
        renderer.render(scene, camera);
    }
    animate3D();
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
</script>

<script type="text/javascript">
    // Hearts & effects
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-drop');
        const heartsList = ['❤️', '💖', '💗', '💓', '💕', '💞', '💘', '✨', '🌸', '🌹'];
        heart.innerHTML = heartsList[Math.floor(Math.random() * heartsList.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 28 + 18) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.opacity = Math.random() * 0.7 + 0.4;
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 5000);
    }
    
    for (let i = 0; i < 40; i++) {
        setTimeout(() => { createFloatingHeart(); }, i * 100);
    }
    
    const btn = document.getElementById('heartRainBtn');
    if(btn) {
        btn.addEventListener('click', () => {
            for (let i = 0; i < 180; i++) {
                setTimeout(() => { createFloatingHeart(); }, i * 18);
            }
            const card = document.querySelector('.grand-card');
            card.style.transform = 'scale(1.02)';
            setTimeout(() => { card.style.transform = ''; }, 300);
            const msgDiv = document.createElement('div');
            msgDiv.innerHTML = '🤍🌹 أنتِ ملكة روحي يا حنين .. عشق أبدي من يوسف مع الموسيقى 🌹🤍';
            msgDiv.style.position = 'fixed';
            msgDiv.style.bottom = '20%';
            msgDiv.style.left = '50%';
            msgDiv.style.transform = 'translateX(-50%)';
            msgDiv.style.backgroundColor = 'rgba(0,0,0,0.8)';
            msgDiv.style.backdropFilter = 'blur(12px)';
            msgDiv.style.color = '#ffdfaa';
            msgDiv.style.padding = '16px 30px';
            msgDiv.style.borderRadius = '60px';
            msgDiv.style.border = '2px solid gold';
            msgDiv.style.fontWeight = 'bold';
            msgDiv.style.fontSize = '1.3rem';
            msgDiv.style.zIndex = '9999';
            msgDiv.style.textAlign = 'center';
            msgDiv.style.fontFamily = 'Cairo';
            document.body.appendChild(msgDiv);
            setTimeout(() => { msgDiv.style.opacity = '0'; setTimeout(() => msgDiv.remove(), 1000); }, 2500);
        });
    }
    
    setInterval(() => {
        if(Math.random() > 0.6) {
            for(let q=0; q<12; q++) {
                setTimeout(() => createFloatingHeart(), q*70);
            }
        }
    }, 4200);
    
    const styleAnimate = document.createElement('style');
    styleAnimate.textContent = `
        .love-letter p {
            transition: all 0.2s;
        }
        .love-letter p:hover {
            transform: translateX(8px);
            text-shadow: 0 0 8px #ffcc77;
        }
    `;
    document.head.appendChild(styleAnimate);
    
    window.addEventListener('load', () => {
        const mainCard = document.querySelector('.grand-card');
        mainCard.style.opacity = '0';
        mainCard.style.transform = 'scale(0.96)';
        setTimeout(() => {
            mainCard.style.transition = 'all 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
            mainCard.style.opacity = '1';
            mainCard.style.transform = 'scale(1)';
        }, 100);
    });
    
    const daysSpan = document.querySelector('.days-number');
    if(daysSpan) {
        let count = 0;
        const target = 108;
        const updateCounter = () => {
            if(count <= target) {
                daysSpan.innerText = count;
                count++;
                setTimeout(updateCounter, 25);
            } else {
                daysSpan.innerText = target;
            }
        };
        updateCounter();
    }
    
    // إدارة الموسيقى
    const audio = document.getElementById('bgAudio');
    const musicBtn = document.getElementById('musicToggleBtn');
    const musicIcon = document.getElementById('musicIcon');
    const musicStatusSpan = document.getElementById('musicStatusText');
    let isPlaying = false;
    
    // محاولة جلب الأغنية وتجهيزها
    audio.volume = 0.65;
    audio.load();
    
    function toggleMusic() {
        if (isPlaying) {
            audio.pause();
            musicIcon.className = 'fas fa-music';
            musicStatusSpan.innerText = 'شغّل الأغنية 🎵';
            isPlaying = false;
        } else {
            // تشغيل مع promise لتفادي أخطاء المتصفح
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    musicIcon.className = 'fas fa-play-circle';
                    musicStatusSpan.innerText = 'الأغنية تعزف 🎶';
                    isPlaying = true;
                }).catch(error => {
                    console.log("التشغيل التلقائي ممنوع، لكن المستخدم سيضغط");
                    // نعطي رسالة بسيطة
                    musicStatusSpan.innerText = 'اضغط هنا للتشغيل 🎧';
                });
            }
        }
    }
    
    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            const promise = audio.play();
            if (promise !== undefined) {
                promise.then(() => {
                    musicIcon.className = 'fas fa-play-circle';
                    musicStatusSpan.innerText = 'الأغنية تعزف 🎶';
                    isPlaying = true;
                }).catch(() => {
                    musicStatusSpan.innerText = 'يُرجى الضغط مرة أخرى';
                });
            }
        } else {
            audio.pause();
            musicIcon.className = 'fas fa-music';
            musicStatusSpan.innerText = 'شغّل الأغنية 🎵';
            isPlaying = false;
        }
    });
    
    // إذا انتهت الأغنية نعيد اللوب تلقائي (loop مفعل)
    audio.addEventListener('ended', () => {
        if(isPlaying) {
            audio.play().catch(e=>console.log);
        }
    });
    
    // لمسة: عند أول تفاعل مع أي مكان في الصفحة يمكن أن نشغل الموسيقى بشكل ذكي إذا أراد المستخدم، لكن الأفضل ترك الزر.
    // إضافة وردة متحركة
    const flowerDiv = document.createElement('div');
    flowerDiv.innerHTML = '🌹🌸🌺';
    flowerDiv.style.position = 'fixed';
    flowerDiv.style.bottom = '10px';
    flowerDiv.style.left = '0';
    flowerDiv.style.fontSize = '35px';
    flowerDiv.style.opacity = '0.3';
    flowerDiv.style.pointerEvents = 'none';
    flowerDiv.style.zIndex = '99';
    flowerDiv.style.animation = 'slideFlower 18s infinite linear';
    document.body.appendChild(flowerDiv);
    const styleFlower = document.createElement('style');
    styleFlower.textContent = `
        @keyframes slideFlower {
            0% { transform: translateX(-20px) rotate(0deg); opacity: 0.2;}
            50% { opacity: 0.7; transform: translateX(40vw) rotate(15deg);}
            100% { transform: translateX(100vw) rotate(40deg); opacity: 0;}
        }
    `;
    document.head.appendChild(styleFlower);
</script>
</body>
</html>