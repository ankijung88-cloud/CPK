const STORAGE_KEY = 'cpk_code_lookup_data_v1';

// 3장의 이미지에서 추출한 초기 데이터 (총 45개 항목)
const INITIAL_DATA = [
  // Image 1 - ASIA (표기: AISA)
  { id: 'asia-nrt', region: 'ASIA', code: 'NRT', slic: '6999JN', dest: '나리타', aliases: '일본 도쿄' },
  { id: 'asia-kix', region: 'ASIA', code: 'KIX', slic: '6963JP', dest: '간사이', aliases: '일본 오사카' },
  { id: 'asia-pek', region: 'ASIA', code: 'PEK', slic: '1542CN', dest: '베이징', aliases: '중국 북경' },
  { id: 'asia-icn', region: 'ASIA', code: 'ICN', slic: '8669', dest: '인천', aliases: '한국 서울' },

  // Image 3 - ASIA (표기: AISA)
  { id: 'asia-cgo', region: 'ASIA', code: 'CGO', slic: '0569', dest: '정저우', aliases: '중국 정주' },
  { id: 'asia-tpe', region: 'ASIA', code: 'TPE', slic: '8879', dest: '타이페이', aliases: '타이베이 대만' },
  { id: 'asia-sin', region: 'ASIA', code: 'SIN', slic: '8869', dest: '싱가포르', aliases: '싱가폴' },
  { id: 'asia-szx', region: 'ASIA', code: 'SZX', slic: '0009', dest: '선전', aliases: '중국 심천' },
  { id: 'asia-hkg', region: 'ASIA', code: 'HKG', slic: '8489', dest: '홍콩', aliases: '' },
  { id: 'asia-mnl', region: 'ASIA', code: 'MNL', slic: '8899PH', dest: '마닐라', aliases: '필리핀' },
  { id: 'asia-dxb', region: 'ASIA', code: 'DXB', slic: '8049', dest: '두바이', aliases: '아랍에미리트 UAE' },
  { id: 'asia-bkk', region: 'ASIA', code: 'BKK', slic: '8889', dest: '방콕', aliases: '태국' },
  { id: 'asia-pvg', region: 'ASIA', code: 'PVG', slic: '8479', dest: '푸동', aliases: '중국 상하이 상해 푸둥' },
  { id: 'asia-sgn', region: 'ASIA', code: 'SGN', slic: '8469VN', dest: '호치민', aliases: '베트남' },
  { id: 'asia-syd', region: 'ASIA', code: 'SYD', slic: '9639AU', dest: '시드니', aliases: '호주 오스트레일리아' },
  { id: 'asia-del', region: 'ASIA', code: 'DEL', slic: '0849IN', dest: '델리', aliases: '인도 뉴델리' },
  { id: 'asia-tlv', region: 'ASIA', code: 'TLV', slic: '', dest: '이스라엘', aliases: '텔아비브' },
  { id: 'asia-crk', region: 'ASIA', code: 'CRK', slic: '8899PH', dest: '클락', aliases: '필리핀' },
  { id: 'asia-cgk', region: 'ASIA', code: 'CGK', slic: '8659ID', dest: '자카르타', aliases: '인도네시아' },
  { id: 'asia-han', region: 'ASIA', code: 'HAN', slic: '7989VN', dest: '하노이', aliases: '베트남' },

  // Image 1 - EUR
  { id: 'eur-cgn', region: 'EUR', code: 'CGN', slic: '3459', dest: '쾰른', aliases: '독일' },
  { id: 'eur-opo', region: 'EUR', code: 'OPO', slic: '3999PT', dest: '포르투칼', aliases: '포르투갈 포르투' },
  { id: 'eur-fra', region: 'EUR', code: 'FRA', slic: '', dest: '프랑크프루트', aliases: '프랑크푸르트 독일' },
  { id: 'eur-man', region: 'EUR', code: 'MAN', slic: '', dest: '영국(맨체스터)', aliases: '맨체스터' },
  { id: 'eur-lhr', region: 'EUR', code: 'LHR', slic: '', dest: '영국(런던)', aliases: '런던 히드로' },
  { id: 'eur-haj', region: 'EUR', code: 'HAJ', slic: '', dest: '독일(하노버)', aliases: '하노버' },
  { id: 'eur-dus', region: 'EUR', code: 'DUS', slic: '', dest: '독일(뒤셀도르프)', aliases: '뒤셀도르프' },
  { id: 'eur-str', region: 'EUR', code: 'STR', slic: '', dest: '독일(스투트가르트)', aliases: '슈투트가르트' },
  { id: 'eur-ist', region: 'EUR', code: 'IST', slic: '', dest: '튀르키예(이스탄불)', aliases: '터키 이스탄불' },
  { id: 'eur-zrh', region: 'EUR', code: 'ZRH', slic: '', dest: '스위스(취리히)', aliases: '취리히' },

  // Image 2 - US
  { id: 'us-sdf', region: 'US', code: 'SDF', slic: '4049', dest: '루이즈빌', aliases: '미국 루이빌' },
  { id: 'us-ont', region: 'US', code: 'ONT', slic: '9199', dest: '온타리오', aliases: '미국 캘리포니아' },
  { id: 'us-anc', region: 'US', code: 'ANC', slic: '9969US', dest: '앵커리지', aliases: '미국 알래스카' },
  { id: 'us-jfk', region: 'US', code: 'JFK', slic: '1149US', dest: '뉴욕', aliases: '미국' },
  { id: 'us-iad', region: 'US', code: 'IAD', slic: '2219US', dest: '워싱턴', aliases: '미국 덜레스' },
  { id: 'us-atl', region: 'US', code: 'ATL', slic: '3039US', dest: '아틀란타', aliases: '애틀랜타 미국' },
  { id: 'us-lax', region: 'US', code: 'LAX', slic: '9099US', dest: '로스엔젤레스', aliases: '로스앤젤레스 LA 미국' },
  { id: 'us-dfw', region: 'US', code: 'DFW', slic: '7649US', dest: '댈러스', aliases: '달라스 미국' },
  { id: 'us-sfo', region: 'US', code: 'SFO', slic: '', dest: '샌프란시스코', aliases: '미국' },
  { id: 'us-hnl', region: 'US', code: 'HNL', slic: '9689US', dest: '호놀룰루', aliases: '하와이 미국' },
  { id: 'us-ord', region: 'US', code: 'ORD', slic: '6089US', dest: '시카고', aliases: '오헤어 미국' },
  { id: 'us-mex', region: 'US', code: 'MEX', slic: '7796MX', dest: '멕시코', aliases: '멕시코시티' },
  { id: 'us-mty', region: 'US', code: 'MTY', slic: '', dest: '멕시코(몬테레이)', aliases: '몬테레이' },
  { id: 'us-iah', region: 'US', code: 'IAH', slic: '', dest: '미국(휴스턴)', aliases: '휴스턴' },
  { id: 'us-bna', region: 'US', code: 'BNA', slic: '', dest: '미국(네슈빌)', aliases: '내슈빌 네쉬빌' }
];

// 한글 초성 추출 함수
const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

function getChosung(str) {
  if (!str) return '';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i) - 44032;
    if (code >= 0 && code <= 11171) {
      result += CHOSUNG_LIST[Math.floor(code / 588)];
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

// 상태 관리
let items = [];
let currentRegion = 'ALL';
let searchQuery = '';
let editingId = null;

// DOM 요소
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const regionTabs = document.getElementById('regionTabs');
const resultsList = document.getElementById('resultsList');
const statusText = document.getElementById('statusText');
const fabAddBtn = document.getElementById('fabAddBtn');
const resetDataBtn = document.getElementById('resetDataBtn');

// 모달 요소
const itemModal = document.getElementById('itemModal');
const modalTitle = document.getElementById('modalTitle');
const closeModalBtn = document.getElementById('closeModalBtn');
const itemForm = document.getElementById('itemForm');
const codeInput = document.getElementById('codeInput');
const slicInput = document.getElementById('slicInput');
const destInput = document.getElementById('destInput');
const deleteItemBtn = document.getElementById('deleteItemBtn');
const toastEl = document.getElementById('toast');

let toastTimer = null;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2000);
}

// 데이터 불러오기 및 저장
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        items = parsed;
        return;
      }
    }
  } catch (e) {
    console.error('Failed to read localStorage:', e);
  }
  items = JSON.parse(JSON.stringify(INITIAL_DATA));
  saveData();
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error('Failed to save localStorage:', e);
  }
}

// 검색 매칭 검사 (3CODE, SLIC, DEST, 한글 초성, 대체 표기 모두 지원)
function matchesItem(item, query) {
  if (!query) return true;
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const code = (item.code || '').toLowerCase();
  const slic = (item.slic || '').toLowerCase();
  const dest = (item.dest || '').toLowerCase();
  const aliases = (item.aliases || '').toLowerCase();
  const region = (item.region || '').toLowerCase();

  // 일반 문자열 포함 검사
  if (
    code.includes(q) ||
    slic.includes(q) ||
    dest.includes(q) ||
    aliases.includes(q) ||
    region.includes(q)
  ) {
    return true;
  }

  // 한글 초성 검색 검사 (괄호 등 특수문자 제거 후 비교도 지원)
  const destChosung = getChosung(dest);
  const destCleanChosung = getChosung(dest.replace(/[()/\s]/g, ''));
  const aliasChosung = getChosung(aliases);

  if (
    destChosung.includes(q) ||
    destCleanChosung.includes(q) ||
    aliasChosung.includes(q)
  ) {
    return true;
  }

  return false;
}

// 검색어 하이라이트 렌더링
function highlightText(text, query) {
  if (!text) return '';
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  if (!query || !query.trim()) return escaped;

  const q = query.trim();
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return escaped;

  const before = text.slice(0, idx).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const match = text.slice(idx, idx + q.length).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const after = text.slice(idx + q.length).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `${before}<mark class="hl">${match}</mark>${after}`;
}

// 탭 카운트 업데이트
function updateTabCounts() {
  const counts = {
    ALL: 0,
    ASIA: 0,
    EUR: 0,
    US: 0
  };

  items.forEach((item) => {
    if (matchesItem(item, searchQuery)) {
      counts.ALL++;
      if (counts[item.region] !== undefined) {
        counts[item.region]++;
      }
    }
  });

  document.getElementById('count-ALL').textContent = counts.ALL;
  document.getElementById('count-ASIA').textContent = counts.ASIA;
  document.getElementById('count-EUR').textContent = counts.EUR;
  document.getElementById('count-US').textContent = counts.US;
}

// 리스트 렌더링
function render() {
  updateTabCounts();

  const filtered = items.filter((item) => {
    const regionOk = currentRegion === 'ALL' || item.region === currentRegion;
    return regionOk && matchesItem(item, searchQuery);
  });

  const regionLabel = currentRegion === 'ALL' ? '전체 지역' : currentRegion;
  statusText.textContent = `${regionLabel} · 검색결과 ${filtered.length}건`;

  if (filtered.length === 0) {
    const safeQuery = searchQuery.trim();
    resultsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-title">일치하는 데이터가 없습니다</div>
        <div class="empty-desc">
          ${safeQuery ? `'${safeQuery}'에 대한 검색 결과가 없습니다.` : '해당 지역에 등록된 데이터가 없습니다.'}
        </div>
        <button type="button" class="btn-inline-add" id="inlineAddBtn">+ 새 코드 직접 추가하기</button>
      </div>
    `;
    const inlineAddBtn = document.getElementById('inlineAddBtn');
    if (inlineAddBtn) {
      inlineAddBtn.addEventListener('click', () => openModalForCreate(safeQuery));
    }
    return;
  }

  resultsList.innerHTML = filtered
    .map((item) => {
      const codeHtml = highlightText(item.code, searchQuery);
      const destHtml = highlightText(item.dest, searchQuery);
      const slicHtml = item.slic
        ? `<span class="slic-badge">${highlightText(item.slic, searchQuery)}</span>`
        : `<span class="slic-empty">미등록</span>`;

      return `
        <div class="item-card" data-id="${item.id}">
          <div class="col-code">
            <span class="code-text">${codeHtml}</span>
            <span class="region-badge region-${item.region}">${item.region}</span>
          </div>
          <div class="col-slic">
            ${slicHtml}
          </div>
          <div class="col-dest">${destHtml}</div>
          <div class="col-action">
            <button type="button" class="edit-btn" data-edit-id="${item.id}" aria-label="수정">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    })
    .join('');
}

// 모달 열기 (새 항목 추가)
function openModalForCreate(prefill = '') {
  editingId = null;
  modalTitle.textContent = '새 코드 정보 추가';
  deleteItemBtn.style.display = 'none';

  const defaultRegion = currentRegion === 'ALL' ? 'ASIA' : currentRegion;
  const radio = itemForm.querySelector(`input[name="region"][value="${defaultRegion}"]`);
  if (radio) radio.checked = true;

  // 검색어가 영문 3자리면 3CODE에, 한글이면 목적지에 자동 입력
  if (/^[a-zA-Z]{2,4}$/.test(prefill)) {
    codeInput.value = prefill.toUpperCase();
    destInput.value = '';
  } else {
    codeInput.value = '';
    destInput.value = prefill;
  }
  slicInput.value = '';

  itemModal.classList.add('open');
  setTimeout(() => {
    if (!codeInput.value) codeInput.focus();
    else slicInput.focus();
  }, 80);
}

// 모달 열기 (항목 수정/삭제)
function openModalForEdit(id) {
  const target = items.find((it) => it.id === id);
  if (!target) return;

  editingId = id;
  modalTitle.textContent = `${target.code} (${target.dest}) 정보 수정`;
  deleteItemBtn.style.display = 'inline-block';

  const radio = itemForm.querySelector(`input[name="region"][value="${target.region}"]`);
  if (radio) radio.checked = true;

  codeInput.value = target.code || '';
  slicInput.value = target.slic || '';
  destInput.value = target.dest || '';

  itemModal.classList.add('open');
}

function closeModal() {
  itemModal.classList.remove('open');
  editingId = null;
}

// 이벤트 바인딩
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.classList.toggle('visible', searchQuery.length > 0);
  render();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.classList.remove('visible');
  searchInput.focus();
  render();
});

regionTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;
  currentRegion = btn.dataset.region;
  regionTabs.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  render();
});

resultsList.addEventListener('click', (e) => {
  const card = e.target.closest('.item-card');
  if (!card) return;
  const id = card.dataset.id;
  openModalForEdit(id);
});

fabAddBtn.addEventListener('click', () => openModalForCreate(searchQuery.trim()));
closeModalBtn.addEventListener('click', closeModal);

itemModal.addEventListener('click', (e) => {
  if (e.target === itemModal) closeModal();
});

// 저장 처리 (추가 및 수정)
itemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedRegion = itemForm.querySelector('input[name="region"]:checked')?.value || 'ASIA';
  const code = codeInput.value.trim().toUpperCase();
  const slic = slicInput.value.trim().toUpperCase();
  const dest = destInput.value.trim();

  if (!code || !dest) {
    showToast('3CODE와 목적지(DEST)를 입력해 주세요.');
    return;
  }

  if (editingId) {
    const idx = items.findIndex((it) => it.id === editingId);
    if (idx !== -1) {
      items[idx] = {
        ...items[idx],
        region: selectedRegion,
        code,
        slic,
        dest
      };
      saveData();
      render();
      closeModal();
      showToast(`${code} 정보가 수정되었습니다.`);
    }
  } else {
    const newItem = {
      id: `custom-${Date.now()}`,
      region: selectedRegion,
      code,
      slic,
      dest,
      aliases: ''
    };
    items.unshift(newItem);
    saveData();
    render();
    closeModal();
    showToast(`${code} (${dest}) 항목이 추가되었습니다.`);
  }
});

// 삭제 처리
deleteItemBtn.addEventListener('click', () => {
  if (!editingId) return;
  const target = items.find((it) => it.id === editingId);
  if (!target) return;

  if (confirm(`'${target.code} (${target.dest})' 항목을 삭제하시겠습니까?`)) {
    items = items.filter((it) => it.id !== editingId);
    saveData();
    render();
    closeModal();
    showToast(`${target.code} 항목이 삭제되었습니다.`);
  }
});

// 초기 데이터 복원 버튼
resetDataBtn.addEventListener('click', () => {
  if (confirm('추가·수정한 내역을 초기화하고 원본 이미지 데이터(45개)로 복원하시겠습니까?')) {
    items = JSON.parse(JSON.stringify(INITIAL_DATA));
    saveData();
    render();
    showToast('초기 데이터(45개)로 복원되었습니다.');
  }
});

// 서비스 워커 등록 (오프라인 지원)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// 앱 시작
loadData();
render();

