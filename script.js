function calculateTpn() {
    // Get the weight and TPN values
    var weight = parseFloat(document.getElementById('weight').value);
    var tpn = parseFloat(document.getElementById('tpn').value);
    
    // Validate input
    if (isNaN(weight) || isNaN(tpn)) {
        alert("Please enter valid values for Weight and TPN volume.");
        return;
    }
    
    
    // Calculate TPN Volume (TPN volume per kg multiplied by weight)
    var result = tpn * weight;
    
    // Display the result next to the TPN Volume label
    document.getElementById('tpnResult').textContent = `TPN Volume: ${result.toFixed(2)} ml`;
}

function calculateVitalipids() {
    // Get the weight and vitalipid values
    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    
    // Validate input
    if (isNaN(weight) || isNaN(vitalipids)) {
        alert("Please enter valid values for Weight and Vitalipids.");
        return;
    }
    
    // Calculate Vitalipids before priming (vitalipid value multiplied by weight)
    var result = vitalipids * weight;
    
    // Display the result next to the calculate button
    document.getElementById('vitaResult').textContent = `Vitalipids: ${result.toFixed(2)} ml`;
}


function calculateIntralipids() {
    // Get the weight and intralipids values
    var weight = parseFloat(document.getElementById('weight').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids)) {
        alert("Please enter valid values for Weight and Intralipids.");
        return;
    }
    
    // Calculate Intralipids: (value * weight) * (100/20)
    var result = (intralipids * weight) * (100 / 20);
    
    // Display the result next to the Intralipids label
    document.getElementById('intraResult').textContent = `Intralipids: ${result.toFixed(2)} ml`;
}

function calculateLipidVolume() {
    // Get the weight, intralipids, and vitalipids values
    var weight = parseFloat(document.getElementById('weight').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    
    // Validate input
    if (isNaN(weight) || isNaN(intralipids) || isNaN(vitalipids)) {
        alert("Please enter valid values for Weight, Intralipids, and Vitalipids.");
        return;
    }
    
    // Calculate Intralipids: (value * weight) * (100/20)
    var intralipidVolume = (intralipids * weight) * (100 / 20);
    
    // Calculate Vitalipids: value * weight
    var vitalipidVolume = vitalipids * weight;
    
    // Calculate the total Lipid Volume by adding both results
    var totalLipidVolume = intralipidVolume + vitalipidVolume;
    
    // Display the result next to the Lipid Total label
    document.getElementById('lipidResult').textContent = `Lipid Volume: ${totalLipidVolume.toFixed(2)} ml`;
}

function calculateVitalipidsPriming() {
    // Get the weight, vitalipids, lipid tube length, and lipid total volume
    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value); // Lipid tube length in cm
    var totalLipidVolume = parseFloat(document.getElementById('lipidResult').textContent.split(':')[1].trim()); // Extract total lipid volume from the Lipid Total calculation result
    
    // Validate input
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(lipidTubeLength) || isNaN(totalLipidVolume)) {
        alert("Please enter valid values for Weight, Vitalipids, Lipid Tube Length, and Lipid Volume.");
        return;
    }
    
    // Calculate the Vitalipids Volume: value * weight
    var vitalipidVolume = vitalipids * weight;
    
    // Calculate the Priming Factor
    var primingFactor = lipidTubeLength / totalLipidVolume;
    
    // Calculate the Priming Adjusted Vitalipids Volume
    var primedVitalipidVolume = vitalipidVolume + (primingFactor * vitalipidVolume);
    
    // Display the result next to the "Vitalipids with Priming" button
    document.getElementById('vitaprimingResult').textContent = `Vitalipids Priming: ${primedVitalipidVolume.toFixed(2)} ml`;
}

function calculateIntralipidPriming() {
    var weight = parseFloat(document.getElementById('weight').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value);
    var totalLipidVolume = parseFloat(document.getElementById('lipidResult').textContent.split(':')[1].trim());

    // Validate input
    if (isNaN(weight) || isNaN(intralipids) || isNaN(lipidTubeLength) || isNaN(totalLipidVolume)) {
        alert("Please enter valid values for Weight, Intralipids, Lipid Tube Length, and Lipid Total Volume.");
        return;
    }

    // Calculate Intralipid volume
    var intralipidVolume = (intralipids * weight * 100) / 20; // Adjusted formula
    var primingFactor = lipidTubeLength / totalLipidVolume;
    var primedIntralipidVolume = intralipidVolume + (primingFactor * intralipidVolume);

    // Display result
    document.getElementById('intraprimingResult').textContent = `Intralipids Priming: ${primedIntralipidVolume.toFixed(2)} ml`;
}

function calculateLipidPriming() {
    var weight = parseFloat(document.getElementById('weight').value);
    var vitalipids = parseFloat(document.getElementById('vitalipids').value);
    var intralipids = parseFloat(document.getElementById('intralipids').value);
    var lipidTubeLength = parseFloat(document.getElementById('lipidlength').value);

    // Validate input
    if (isNaN(weight) || isNaN(vitalipids) || isNaN(intralipids) || isNaN(lipidTubeLength)) {
        alert("Please enter valid values for Weight, Vitalipids, Intralipids, and Lipid Tube Length.");
        return;
    }

    // Calculate Vitalipid Volume
    var vitalipidVolume = vitalipids * weight;

    // Calculate Intralipid Volume
    var intralipidVolume = (intralipids * weight * 100) / 20;

    // Calculate Total Lipid Volume
    var totalLipidVolume = vitalipidVolume + intralipidVolume;

    // Calculate Priming Factors
    var primingFactor = lipidTubeLength / totalLipidVolume;

    // Calculate Priming Volumes
    var vitalipidPrimingVolume = (vitalipidVolume * primingFactor) + vitalipidVolume;
    var intralipidPrimingVolume = (intralipidVolume * primingFactor) + intralipidVolume;

    // Calculate Total Lipid Priming Volume
    var totalLipidPrimingVolume = vitalipidPrimingVolume + intralipidPrimingVolume;

    // Display result
    document.getElementById('lipidprimingResult').textContent = `Lipid Priming: ${totalLipidPrimingVolume.toFixed(2)} ml`;
}

function calculateAquaVolume() {
    // Get the calculated TPN volume from the result span
    var tpnVolumeText = document.getElementById('tpnResult').textContent;
    var totalVolume = parseFloat(tpnVolumeText.split(": ")[1]); // Extract number after "TPN Volume:"

    // Get the calculated Lipid Volume
    var lipidVolumeText = document.getElementById('lipidResult').textContent;
    var lipidVolume = parseFloat(lipidVolumeText.split(": ")[1]); // Extract number after "Lipid Volume:"

    // Validate input
    if (isNaN(totalVolume) || isNaN(lipidVolume)) {
        alert("Please calculate TPN Volume and Lipid Volume first.");
        return;
    }

    // Calculate Aquous Volume
    var aquaVolume = totalVolume - lipidVolume;

    // Display the result
    document.getElementById('aqaResult').textContent = `Aqueous Volume: ${aquaVolume.toFixed(2)} ml`;
}


function calculateaquPriming() {
    // Get the calculated TPN volume
    var tpnVolumeText = document.getElementById('tpnResult').textContent;
    var totalVolume = parseFloat(tpnVolumeText.split(": ")[1]); // Extract number after "TPN Volume:"

    // Get the calculated Lipid Volume
    var lipidVolumeText = document.getElementById('lipidResult').textContent;
    var lipidVolume = parseFloat(lipidVolumeText.split(": ")[1]); // Extract number after "Lipid Total Volume:"

    // Get the Aquous Tube Length
    var aquTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Validate inputs
    if (isNaN(totalVolume) || isNaN(lipidVolume) || isNaN(aquTubeLength)) {
        alert("Please ensure all inputs are valid: TPN Volume, Lipid Volume, and Aqueous Tube Length.");
        return;
    }

    // Calculate Aquous Volume
    var aquaVolume = totalVolume - lipidVolume;

    // Calculate Priming Factor
    var primingFactor = aquTubeLength / aquaVolume;

    // Calculate Priming Volume
    var primingVolume = primingFactor * aquaVolume;

    // Calculate Aquous Volume with Priming
    var aquaVolumeWithPriming = aquaVolume + primingVolume;

    // Display the result
    document.getElementById('aqaprimingResult').textContent = `Aqueous Priming: ${aquaVolumeWithPriming.toFixed(2)} ml`;
}

function calculateaminoacids() {
    // Get the weight and amino acids value entered by the user
    var weight = parseFloat(document.getElementById('weight').value);
    var aminoacidsValue = parseFloat(document.getElementById('aminoacids').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(aminoacidsValue)) {
        alert("Please enter valid values for Weight and Amino acids.");
        return;
    }

    // Calculate Amino Acids Volume
    var aminoacidsVolume = aminoacidsValue * weight * (100 / 10);

    // Display the result
    document.getElementById('aminoResult').textContent = `Amino Acids Volume: ${aminoacidsVolume.toFixed(2)} ml`;
}
function calculateaminoPriming() {
    // Get the necessary inputs
    var aquLength = parseFloat(document.getElementById('aqulength').value);
    var aquVolume = parseFloat(document.getElementById('aqaResult').textContent.split(':')[1]); // Extract volume from displayed text
    var aminoacidsValue = parseFloat(document.getElementById('aminoResult').textContent.split(':')[1]); // Extract value from displayed text

    // Validate inputs
    if (isNaN(aquLength) || isNaN(aquVolume) || isNaN(aminoacidsValue)) {
        alert("Please enter valid values for Aqueous tube length, Aqueous volume, and Amino acids.");
        return;
    }

    // Calculate Priming Factor
    var primingFactor = aquLength / aquVolume;

    // Calculate Amino Acids Volume with Priming
    var aminoPriming = aminoacidsValue * primingFactor;
    var aminoWithPriming = aminoacidsValue + aminoPriming;

    // Display the result
    document.getElementById('aminoprimingResult').textContent = `Amino acids Priming: ${aminoWithPriming.toFixed(2)} ml`;
}

function calculatedextrose() {
    // Get the necessary inputs
    var weight = parseFloat(document.getElementById('weight').value);
    var dextroseValue = parseFloat(document.getElementById('dextrose').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(dextroseValue)) {
        alert("Please enter valid values for weight and dextrose.");
        return;
    }

    // Calculate Dextrose Volume
    var dextroseVolume = (dextroseValue * weight * 100) / 50;

    // Display the result
    document.getElementById('dextroseResult').textContent = `Dextrose Volume: ${dextroseVolume.toFixed(2)} ml`;
}



function calculatedextrosePriming() {
    // Get the necessary inputs
    var weight = parseFloat(document.getElementById('weight').value);  // User's weight
    var aquLength = parseFloat(document.getElementById('aqulength').value);  // Aqu Tube Length entered
    var aquVolumeText = document.getElementById('aqaResult').textContent;  // Aqu Volume calculated

    // Validate inputs
    if (isNaN(weight) || isNaN(aquLength) || aquVolumeText.trim() === "") {
        alert("Please enter valid values for weight, aqu tube length, and aqu volume.");
        return;
    }

    // Extract numeric part of aquVolume from the string (Assumes format: "Aqu Volume: 50 ml")
    var aquVolumeMatch = aquVolumeText.match(/(\d+(\.\d+)?)/);  // Match a number (with or without decimal)
    if (aquVolumeMatch && aquVolumeMatch[0]) {
        var aquVolume = parseFloat(aquVolumeMatch[0]);
    } else {
        alert("Aqueous volume is not valid.");
        return;
    }

    // Retrieve the previously calculated Dextrose Volume from the result
    var dextroseVolumeText = document.getElementById('dextroseResult').textContent;
    var dextroseVolumeMatch = dextroseVolumeText.match(/(\d+(\.\d+)?)/); // Match numeric value in Dextrose Volume text
    if (dextroseVolumeMatch && dextroseVolumeMatch[0]) {
        var dextroseVolume = parseFloat(dextroseVolumeMatch[0]);
    } else {
        alert("Dextrose Volume has not been calculated yet.");
        return;
    }

    // Calculate the priming factor using aquLength and aquVolume
    var primingFactor = aquLength / aquVolume;

    // Apply the priming adjustment to the dextrose volume
    var dextroseVolumePriming = dextroseVolume + (primingFactor * dextroseVolume);

    // Display the result
    document.getElementById('dextroseprimingResult').textContent = `Dextrose Priming: ${dextroseVolumePriming.toFixed(2)} ml`;
}

function calculatenacl() {
    // Retrieve input values
    var naclValue = parseFloat(document.getElementById('nacl').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumChlorideStrength = document.getElementById('sodiumChlorideStrength').value;

    // Check if all inputs are valid
    if (isNaN(naclValue) || isNaN(weight) || !sodiumChlorideStrength) {
        alert("Please enter valid values for Sodium Chloride, Weight, and Strength.");
        return;
    }

    // Calculate sodium chloride based on the strength
    var naclResult;

    if (sodiumChlorideStrength === "20%") {
        naclResult = (naclValue * weight) / 3.244;
    } else if (sodiumChlorideStrength === "3%") {
        naclResult = (naclValue * weight) / 0.519;
    } else {
        alert("Please select a valid Strength for Sodium Chloride.");
        return;
    }

    // Display the result
    document.getElementById('naclResult').textContent = "Sodium Chloride: " + naclResult.toFixed(2) + " ml";
}

function calculatenaclPriming() {
    // Retrieve previously calculated Sodium Chloride volume
    var naclVolumeText = document.getElementById('naclResult').textContent;
    var naclVolume = parseFloat(naclVolumeText.replace("Sodium Chloride: ", "").replace(" mmol", ""));
    console.log("naclVolume:", naclVolume);  // Debugging line

    // Ensure naclVolume is a valid number
    if (isNaN(naclVolume)) {
        alert("Please calculate Sodium Chloride first.");
        return;
    }

    // Retrieve Aquous tube length and Aquous volume
    var aquTubeLength = parseFloat(document.getElementById('aqulength').value);
    var aquVolumeText = document.getElementById('aqaResult').textContent;
    var aquVolume = parseFloat(aquVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));
    console.log("aquTubeLength:", aquTubeLength, "aquVolume:", aquVolume);  // Debugging line

    // Ensure aquTubeLength and aquVolume are valid numbers
    if (isNaN(aquTubeLength) || isNaN(aquVolume)) {
        alert("Please enter valid values for Aqueous Tube Length and Aquous Volume.");
        return;
    }

    // Calculate the priming factor
    var primingFactor = aquTubeLength / aquVolume;
    console.log("Priming Factor:", primingFactor);  // Debugging line

    // Adjust Sodium Chloride volume with priming
    var naclPriming = naclVolume + (naclVolume * primingFactor);
    console.log("Sodium Chloride with Priming:", naclPriming);  // Debugging line

    // Display the result
    document.getElementById('naclprimingResult').textContent = "Sodium Chloride Priming: " + naclPriming.toFixed(2) + " mmol";
}

function calculateSodiumAcetate() {
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumAcetateValue = parseFloat(document.getElementById('sodiumAcetate').value);

    if (isNaN(weight) || isNaN(sodiumAcetateValue)) {
        alert("Please enter valid values for weight and sodium acetate.");
        return;
    }

    // Calculate Sodium Acetate Volume
    var sodiumAcetateVolume = (sodiumAcetateValue * weight) / 2;

    // Display the result
    document.getElementById('naacetateResult').textContent = "Sodium Acetate Volume: " + sodiumAcetateVolume.toFixed(2) + " ml";
}


function calculateSodiumAcetatePriming() {
    // Call calculateAquaVolume first to ensure that aqaResult is calculated
    calculateAquaVolume();  // Ensure this is called before accessing aqaResult
    
    // Retrieve input values from the HTML form
    var weight = parseFloat(document.getElementById('weight').value);
    var sodiumAcetateValue = parseFloat(document.getElementById('sodiumAcetate').value);
    var aquTubeLength = parseFloat(document.getElementById('aqulength').value);
    
    // Retrieve the Aqua Volume from the aqaResult span
    var aquVolumeText = document.getElementById('aqaResult').textContent;
    var aquVolume = parseFloat(aquVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));
    
    // Log the values for debugging
    console.log("Weight (kg):", weight);
    console.log("Sodium Acetate Value (mmol/kg):", sodiumAcetateValue);
    console.log("Aqua Tube Length (cm):", aquTubeLength);
    console.log("Aqua Volume (ml):", aquVolume);
    
    // Validate input values
    if (isNaN(weight) || isNaN(sodiumAcetateValue) || isNaN(aquTubeLength) || isNaN(aquVolume)) {
        alert("Please check if all fields are filled with valid numbers.");
        return;
    }
    
    // Calculate Sodium Acetate Volume (simplified example formula)
    var sodiumAcetateVolume = (sodiumAcetateValue * weight) / 2;  // Simplified formula
    console.log("Sodium Acetate Volume (without priming):", sodiumAcetateVolume);

    // Calculate Priming Factor (simplified)
    var primingFactor = aquTubeLength / aquVolume;  // Simplified assumption
    console.log("Priming Factor:", primingFactor);

    // Calculate Sodium Acetate with Priming
    var sodiumAcetatePriming = sodiumAcetateVolume + (sodiumAcetateVolume * primingFactor);
    console.log("Sodium Acetate with Priming:", sodiumAcetatePriming);

    // Display the result
    document.getElementById('naacetateprimingResult').textContent = `Sodium Acetate Priming: ${sodiumAcetatePriming.toFixed(2)} ml`;
}

function calculateSodiumPhosphate() {
    // Get the entered Sodium Phosphate value and weight
    var sodiumPhosphateValue = parseFloat(document.getElementById('sodiumPhosphate').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Get the selected brand
    var brand = document.getElementById('sodiumPhosphateBrand').value;

    // Validate inputs
    if (isNaN(sodiumPhosphateValue) || isNaN(weight) || !brand) {
        alert("Please enter valid values for Sodium Phosphate, Weight, and select a brand.");
        return;
    }

    // Determine the divisor based on the selected brand
    var divisor = (brand === "Glucophos") ? 1 : (brand === "Phocytan") ? 0.66 : null;

    if (divisor === null) {
        alert("Invalid brand selected.");
        return;
    }

    // Calculate Sodium Phosphate volume
    var sodiumPhosphateVolume = (sodiumPhosphateValue * weight) / divisor;

    // Display the result
    document.getElementById('naphosphateResult').textContent = `Sodium Phosphate Volume: ${sodiumPhosphateVolume.toFixed(2)} ml`;
}

function calculateSodiumPhosphatePriming() {
    // Get the Sodium Phosphate volume from the calculated result
    var sodiumPhosphateText = document.getElementById('naphosphateResult').textContent;
    var sodiumPhosphateVolume = parseFloat(sodiumPhosphateText.replace("Sodium Phosphate Volume: ", "").replace(" ml", ""));

    // Get the Aqueous Tube Length from the user input
    var aqueousTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Get the calculated Aqueous Volume
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));

    // Validate inputs
    if (isNaN(sodiumPhosphateVolume) || isNaN(aqueousTubeLength) || isNaN(aquaVolume)) {
        alert("Please ensure all fields are filled and calculations are done correctly.");
        return;
    }

    // Calculate the priming factor
    var primingFactor = aqueousTubeLength / aquaVolume;

    // Calculate the primed Sodium Phosphate volume
    var sodiumPhosphatePrimingVolume = sodiumPhosphateVolume + (sodiumPhosphateVolume * primingFactor);

    // Display the result
    document.getElementById('naphosphateprimingResult').textContent = `Sodium Phosphate with Priming: ${sodiumPhosphatePrimingVolume.toFixed(2)} ml`;
}

function calculateSodiumPhosphatePriming() {
    // Get the Sodium Phosphate volume from the calculated result
    var sodiumPhosphateText = document.getElementById('naphosphateResult').textContent;
    var sodiumPhosphateVolume = parseFloat(sodiumPhosphateText.replace("Sodium Phosphate Volume: ", "").replace(" ml", ""));

    // Get the Aqueous Tube Length from the user input
    var aqueousTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Get the calculated Aqueous Volume
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));

    // Validate inputs
    if (isNaN(sodiumPhosphateVolume) || isNaN(aqueousTubeLength) || isNaN(aquaVolume)) {
        alert("Please ensure all fields are filled and calculations are done correctly.");
        return;
    }

    // Calculate the priming factor
    var primingFactor = aqueousTubeLength / aquaVolume;

    // Calculate the primed Sodium Phosphate volume
    var sodiumPhosphatePrimingVolume = sodiumPhosphateVolume + (sodiumPhosphateVolume * primingFactor);

    // Display the result
    document.getElementById('naphosphateprimingResult').textContent = `Sodium Phosphate with Priming: ${sodiumPhosphatePrimingVolume.toFixed(2)} ml`;
}

function calculatePotassiumChloride() {
    // Get the user inputs
    var potassiumChlorideValue = parseFloat(document.getElementById('potassiumChloride').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(potassiumChlorideValue) || isNaN(weight)) {
        alert("Please ensure both Potassium Chloride value and weight are entered as valid numbers.");
        return;
    }

    // Calculate Potassium Chloride Volume
    var kclVolume = (potassiumChlorideValue * weight) / 2;

    // Display the result
    document.getElementById('kclResult').textContent = `Potassium Chloride Volume: ${kclVolume.toFixed(2)} ml`;
}

function calculatePotassiumChloridePriming() {
    // Get the calculated KCl volume from the result
    var kclVolumeText = document.getElementById('kclResult').textContent;
    var kclVolume = parseFloat(kclVolumeText.replace("Potassium Chloride Volume: ", "").replace(" ml", ""));

    // Get the Aqueous Tube Length from the user input
    var aqueousTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Get the calculated Aqueous Volume
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));

    // Validate inputs
    if (isNaN(kclVolume) || isNaN(aqueousTubeLength) || isNaN(aquaVolume)) {
        alert("Please ensure all required fields are calculated and filled correctly.");
        return;
    }

    // Calculate the priming factor
    var primingFactor = aqueousTubeLength / aquaVolume;

    // Calculate the primed KCl volume
    var kclPrimingVolume = kclVolume + (primingFactor * kclVolume);

    // Display the result
    document.getElementById('kclprimingResult').textContent = `Potassium Chloride Priming: ${kclPrimingVolume.toFixed(2)} ml`;
}


function calculateCalciumGluconate() {
    // Get the weight and entered value for Ca Gluconate
    var weight = parseFloat(document.getElementById('weight').value);
    var caGluconateValue = parseFloat(document.getElementById('calciumGluconate').value);

    // Validate inputs
    if (isNaN(weight) || isNaN(caGluconateValue)) {
        alert("Please enter valid numbers for weight and Calcium Gluconate.");
        return;
    }

    // Calculate the Calcium Gluconate volume
    var caGluconateVolume = (caGluconateValue * weight) / 0.465;

    // Display the result
    document.getElementById('caResult').textContent = `Calcium Gluconate Volume: ${caGluconateVolume.toFixed(2)} ml`;
}

function calculateCalciumGluconatePriming() {
    // Get the calculated Calcium Gluconate volume from the result
    var caGluconateVolumeText = document.getElementById('caResult').textContent;
    var caGluconateVolume = parseFloat(caGluconateVolumeText.replace("Calcium Gluconate Volume: ", "").replace(" ml", ""));

    // Get the Aqueous Tube Length from the user input
    var aqueousTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Get the calculated Aqueous Volume
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));

    // Validate inputs
    if (isNaN(caGluconateVolume) || isNaN(aqueousTubeLength) || isNaN(aquaVolume)) {
        alert("Please ensure all required fields are calculated and filled correctly.");
        return;
    }

    // Calculate the priming factor
    var primingFactor = aqueousTubeLength / aquaVolume;

    // Calculate the primed Calcium Gluconate volume
    var caGluconatePrimingVolume = caGluconateVolume + (primingFactor * caGluconateVolume);

    // Display the result
    document.getElementById('caprimingResult').textContent = `Calcium Gluconate with Priming: ${caGluconatePrimingVolume.toFixed(2)} ml`;
}

function calculateHeparin() {
    // Retrieve the value entered for Heparin
    var heparinValue = parseFloat(document.getElementById('heparin').value);

    // Retrieve the calculated Aqueous Volume
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));

    // Validate inputs
    if (isNaN(heparinValue) || isNaN(aquaVolume)) {
        alert("Please ensure that both Heparin value and Aqueous Volume are valid.");
        return;
    }

    // Calculate Heparin Volume
    var heparinVolume = (heparinValue * aquaVolume) / 100;

    // Display the result
    document.getElementById('heparinResult').textContent = `Heparin Volume: ${heparinVolume.toFixed(2)} ml`;
}

function calculateHeparinPriming() {
    // Retrieve the calculated Heparin Volume
    var heparinVolumeText = document.getElementById('heparinResult').textContent;
    var heparinVolume = parseFloat(heparinVolumeText.replace("Heparin Volume: ", "").replace(" ml", ""));

    // Retrieve the Aqueous Tube Length entered by the user
    var aquTubeLength = parseFloat(document.getElementById('aqulength').value);

    // Retrieve the calculated Aqueous Volume
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));

    // Validate inputs
    if (isNaN(heparinVolume) || isNaN(aquTubeLength) || isNaN(aquaVolume)) {
        alert("Please ensure that Heparin Volume, Aqueous Tube Length, and Aqueous Volume are valid.");
        return;
    }

    // Calculate priming factor
    var primingFactor = aquTubeLength / aquaVolume;

    // Calculate Heparin Volume with Priming
    var heparinVolumePriming = (primingFactor * heparinVolume) + heparinVolume;

    // Display the result
    document.getElementById('heparinprimingResult').textContent = `Heparin Priming: ${heparinVolumePriming.toFixed(2)} ml`;
}

function calculateMultivitamins() {
    // Retrieve the value entered for Multivitamins
    var multivitaminsValue = parseFloat(document.getElementById('multivitamins').value);

    // Retrieve the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(multivitaminsValue) || isNaN(weight)) {
        alert("Please ensure that both Multivitamins value and Weight are valid.");
        return;
    }

    // Calculate Multivitamins Volume
    var multivitaminsVolume = multivitaminsValue * weight;

    // Display the result
    document.getElementById('multiResult').textContent = `Multivitamins Volume: ${multivitaminsVolume.toFixed(2)} ml`;
}
function calculateMultivitaminsPriming() {
    // Retrieve the previously calculated Multivitamins Volume
    var multivitaminsResultText = document.getElementById('multiResult').textContent;
    var multivitaminsVolume = parseFloat(multivitaminsResultText.replace("Multivitamins Volume: ", "").replace(" ml", ""));
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));
    // Retrieve the priming factor
    var aqulength = parseFloat(document.getElementById('aqulength').value);
    var primingFactor = aqulength / aquaVolume;

    // Validate inputs
    if (isNaN(multivitaminsVolume) || isNaN(primingFactor)) {
        alert("Please ensure Multivitamins Volume is calculated and Aqueous Tube Length is entered.");
        return;
    }

    // Calculate Multivitamins Volume with Priming
    var primingVolume = multivitaminsVolume * primingFactor;
    var totalVolumeWithPriming = multivitaminsVolume + primingVolume;

    // Display the result
    document.getElementById('multiprimingResult').textContent = `Multivitamins Priming: ${totalVolumeWithPriming.toFixed(2)} ml`;
}

function calculateTraceElements() {
    // Retrieve the value entered for Trace Elements
    var traceElementsValue = parseFloat(document.getElementById('traceElements').value);

    // Retrieve the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(traceElementsValue) || isNaN(weight)) {
        alert("Please ensure that both Trace Elements value and Weight are valid.");
        return;
    }

    // Calculate Trace Elements Volume
    var traceElementsVolume = traceElementsValue * weight;

    // Display the result
    document.getElementById('traceResult').textContent = `Trace Elements Volume: ${traceElementsVolume.toFixed(2)} ml`;
}

function calculateTraceElementsPriming() {
    // Retrieve the previously calculated Trace Elements Volume
    var traceResultText = document.getElementById('traceResult').textContent;
    var traceElementsVolume = parseFloat(traceResultText.replace("Trace Elements Volume: ", "").replace(" ml", ""));
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));
    // Retrieve the priming factor
    var aqulength = parseFloat(document.getElementById('aqulength').value);
    var primingFactor = aqulength / aquaVolume;

    // Validate inputs
    if (isNaN(traceElementsVolume) || isNaN(primingFactor)) {
        alert("Please ensure Trace Elements Volume is calculated and Aqueous Tube Length is entered.");
        return;
    }

    // Calculate Trace Elements Volume with Priming
    var primingVolume = traceElementsVolume * primingFactor;
    var totalVolumeWithPriming = traceElementsVolume + primingVolume;

    // Display the result
    document.getElementById('traceprimingResult').textContent = `Trace Elements Priming: ${totalVolumeWithPriming.toFixed(2)} ml`;
}

function calculateSterileWater() {
    // Retrieve the calculated Aqueous Volume
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));

    // If Aqueous Volume is not valid
    if (isNaN(aquaVolume)) {
        alert("Please calculate Aqueous Volume first.");
        return;
    }

    // Retrieve the calculated volumes of other components (Check each one)
    var aminoVolume = getComponentVolume('aminoResult');
    var dextroseVolume = getComponentVolume('dextroseResult');
    var naclVolume = getComponentVolume('naclResult');
    var sodiumAcetateVolume = getComponentVolume('naacetateResult');
    var sodiumPhosphateVolume = getComponentVolume('naphosphateResult');
    var potassiumChlorideVolume = getComponentVolume('kclResult');
    var calciumGluconateVolume = getComponentVolume('caResult');
    var heparinVolume = getComponentVolume('heparinResult');
    var multivitaminsVolume = getComponentVolume('multiResult');
    var traceElementsVolume = getComponentVolume('traceResult');

    // Sum up all the volumes
    var totalComponentVolume = aminoVolume + dextroseVolume + naclVolume + sodiumAcetateVolume +
                               sodiumPhosphateVolume + potassiumChlorideVolume + calciumGluconateVolume +
                               heparinVolume + multivitaminsVolume + traceElementsVolume;

    // Calculate Sterile Water Volume
    var sterileWaterVolume = aquaVolume - totalComponentVolume;

    // Display the result
    document.getElementById('sterileResult').textContent = `Sterile Water Volume: ${sterileWaterVolume.toFixed(2)} ml`;
}

// Helper function to retrieve and validate individual component volumes
function getComponentVolume(elementId) {
    var componentText = document.getElementById(elementId)?.textContent;
    if (!componentText) {
        alert(`Please calculate the volume for ${elementId.replace('Result', '')} first.`);
        return 0; // Return 0 if the component volume is missing
    }

    var componentVolume = parseFloat(componentText.replace(/[^0-9.-]+/g, "")); // Extract number from text
    if (isNaN(componentVolume)) {
        alert(`Invalid volume for ${elementId.replace('Result', '')}. Please check.`);
        return 0; // Return 0 if the value is invalid
    }
    return componentVolume;
}

function calculateSterileWaterPriming() {
    // Retrieve the calculated Aqueous Volume
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.replace("Aqueous Volume: ", "").replace(" ml", ""));

    // Retrieve the AQ Tube Length for priming
    var aqTubeLengthText = document.getElementById('aqulength').value;
    var aqTubeLength = parseFloat(aqTubeLengthText);

    // If Aqueous Volume or AQ Tube Length is not valid
    if (isNaN(aquaVolume) || isNaN(aqTubeLength)) {
        alert("Please enter valid Aqueous Volume and Aqueous Tube Length.");
        return;
    }

    // Calculate the priming factor
    var primingFactor = aqTubeLength / aquaVolume;

    // Retrieve the previously calculated Sterile Water Volume
    var sterileWaterText = document.getElementById('sterileResult').textContent;
    var sterileWater = parseFloat(sterileWaterText.replace("Sterile Water Volume: ", "").replace(" ml", ""));

    // Apply the priming factor to the calculated sterile water volume
    var sterileWaterWithPriming = (sterileWater * primingFactor) + sterileWater;

    // Display the updated Sterile Water Volume with priming
    document.getElementById('sterileprimingResult').textContent = `Sterile Water Priming: ${sterileWaterWithPriming.toFixed(2)} ml`;
}

function calculateGIR() {
    // Retrieve the entered Dextrose value (g/kg)
    var dextroseValueText = document.getElementById('dextrose').value;
    var dextroseValue = parseFloat(dextroseValueText);

    // Retrieve the entered Weight (kg)
    var weightText = document.getElementById('weight').value;
    var weight = parseFloat(weightText);

    // Validate input
    if (isNaN(dextroseValue) || dextroseValue <= 0) {
        alert("Please enter a valid Dextrose value.");
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    // Calculate GIR (simplified: weight cancels out)
    var gir = (dextroseValue * 1000) / 1440;

    // Display the result
    document.getElementById('girResult').textContent = `GIR: ${gir.toFixed(2)} mg/kg/min`;
}

function calculateDextroseConcentration() {
    // Retrieve the entered Dextrose value (g/kg)
    var dextroseValueText = document.getElementById('dextrose').value;
    var dextroseValue = parseFloat(dextroseValueText);

    // Retrieve the entered Weight (kg)
    var weightText = document.getElementById('weight').value;
    var weight = parseFloat(weightText);

    // Retrieve the Aqueous Volume calculated (from the result span)
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.split(": ")[1]); // Extract number after "Aqueous Volume:"

    // Validate input
    if (isNaN(dextroseValue) || dextroseValue <= 0) {
        alert("Please enter a valid Dextrose value.");
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
    }

    if (isNaN(aquaVolume) || aquaVolume <= 0) {
        alert("Please calculate Aqueous Volume first.");
        return;
    }

    // Calculate Dextrose Concentration
    var dexConcentration = (dextroseValue * weight) / aquaVolume * 100;

    // Display the result
    document.getElementById('dexconcResult').textContent = `Dextrose Concentration: ${dexConcentration.toFixed(2)} %`;
}

function calculateInfusionRate() {
    // Get the calculated Aqueous Volume from the result span
    var aquaVolumeText = document.getElementById('aqaResult').textContent;
    var aquaVolume = parseFloat(aquaVolumeText.split(": ")[1]); // Extract number after "Aqueous Volume:"

    // Validate input
    if (isNaN(aquaVolume)) {
        alert("Please calculate Aqueous Volume first.");
        return;
    }

    // Calculate Infusion Rate (in ml/hr)
    var infusionRate = aquaVolume / 24;

    // Display the result
    document.getElementById('infusionResult').textContent = `Infusion Rate: ${infusionRate.toFixed(2)} ml/hr`;
}

function calculateTotalCalories() {
    // Get the values entered by the user for amino acids, intralipids, and dextrose
    var aminoAcidsValue = parseFloat(document.getElementById('aminoacids').value);
    var intralipidsValue = parseFloat(document.getElementById('intralipids').value);
    var dextroseValue = parseFloat(document.getElementById('dextrose').value);

    // Get the weight entered by the user
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate input
    if (isNaN(aminoAcidsValue) || isNaN(intralipidsValue) || isNaN(dextroseValue) || isNaN(weight)) {
        alert("Please make sure all fields are filled with valid numbers.");
        return;
    }

    // Calculate Total Calories
    var totalCalories = (aminoAcidsValue * weight * 4) + (intralipidsValue * weight * 9) + (dextroseValue * weight * 3.4);

    // Display the result
    document.getElementById('caloriesResult').textContent = `Total Calories: ${totalCalories.toFixed(2)} kcal`;
}

