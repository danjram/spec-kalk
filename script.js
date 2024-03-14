function calculate() {
    const A = Math.min(parseFloat(document.getElementById('inputLEK').value) || 0, 200);
    const B = Math.min(parseInt(document.getElementById('inputPublications').value) || 0, 10);
    const C = document.getElementById('inputPhD').value === 'tak' ? 5 : 0;
    const D = document.getElementById('inputHired').value === 'tak' ? 5 : 0;
    const E = document.getElementById('inputAcademic').value === 'tak' ? 5 : 0;
    const Z = Math.min(parseInt(document.getElementById('inputDeletedQuestions').value) || 0, 20);

    // Ensure that A + Z never exceeds 200
    const adjustedA = Math.min(A, 200 - Z);

    const finalScoreRezydentura = calculate_final_score_rezydentura(adjustedA, B, C, Z);
    const finalScorePozarezydenckie = calculate_final_score_pozarezydenckie(adjustedA, B, C, D, E, Z);

    document.getElementById('finalScoreRezydentura').textContent = `${finalScoreRezydentura.toFixed(2)}%`;
    document.getElementById('finalScorePozarezydenckie').textContent = `${finalScorePozarezydenckie.toFixed(2)}%`;
}

function calculate_final_score_rezydentura(A, B, C, Z) {
    // Formula for Wynik rekrutacyjny (rezydentura)
    const final_score = (Math.min(Math.max(A, 0), 200) + Math.min(Math.max(B, 0), 10) * 0.5 + Math.min(Math.max(C, 0), 5)) / (210 - Z);
    return round(final_score * 100, 2);
}

function calculate_final_score_pozarezydenckie(A, B, C, D, E, Z) {
    // Formula for Wynik rekrutacyjny (pozarezydenckie)
    const final_score = (Math.min(Math.max(A, 0), 200) + Math.min(Math.max(B, 0), 10) * 0.5 + Math.min(Math.max(C, 0), 5) + Math.min(Math.max(D, 0), 5) + Math.min(Math.max(E, 0), 5)) / (220 - Z);
    return round(final_score * 100, 2);
}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
