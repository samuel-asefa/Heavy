// Components data
const componentsData = {
    // Metal Structure
    'alu-1x1-count': { name: 'Aluminum 1x1 C-Channel', weight: 1.96, unit: 'g/in', configurable: true, lengthId: 'alu-1x1-length', halfId: 'alu-1x1-half' },
    'alu-2x1-count': { name: 'Aluminum 2x1 L Channel', weight: 3.91, unit: 'g/in', configurable: true, lengthId: 'alu-2x1-length', halfId: 'alu-2x1-half' },
    'alu-2x1-c-count': { name: 'Aluminum 2x1 C Channel', weight: 4.14, unit: 'g/in', configurable: true, lengthId: 'alu-2x1-c-length', halfId: 'alu-2x1-c-half' },
    'alu-3x1-count': { name: 'Aluminum 3x1 C Channel', weight: 5.54, unit: 'g/in', configurable: true, lengthId: 'alu-3x1-length', halfId: 'alu-3x1-half' },
    'alu-5x1-count': { name: 'Aluminum 5x1 C Channel', weight: 7.79, unit: 'g/in', configurable: true, lengthId: 'alu-5x1-length', halfId: 'alu-5x1-half' },
    'steel-plate-count': { name: 'Steel 5-hole Plate', weight: 12.06, unit: 'g' },
    'steel-1x-count': { name: 'Steel 1x Plate', weight: 2.45, unit: 'g/in', configurable: true, lengthId: 'steel-1x-length', halfId: 'steel-1x-half' },
    'steel-2x1-count': { name: 'Steel 2x1 C Channel', weight: 7.13, unit: 'g/in', configurable: true, lengthId: 'steel-2x1-length', halfId: 'steel-2x1-half' },
    'channel-couple-count': { name: 'Channel Coupler', weight: 7.7, unit: 'g' },
    'large-slide-count': { name: 'Large Slide Rail', weight: 7.74, unit: 'g/in', configurable: true, lengthId: 'large-slide-length', halfId: 'large-slide-half' },
    'small-slide-count': { name: 'Small Slide Rail', weight: 7.13, unit: 'g/in', configurable: true, lengthId: 'small-slide-length', halfId: 'small-slide-half' },
    
    // Shafts
    'ls-shaft-count': { name: 'Low Strength Shaft', weight: 2, unit: 'g/in', configurable: true, lengthId: 'ls-shaft-length' },
    'hs-shaft-count': { name: 'High Strength Shaft', weight: 7.5, unit: 'g/in', configurable: true, lengthId: 'hs-shaft-length' },
    
    // Nuts
    'lock-nut': { name: 'Lock Nut', weight: 1.8, unit: 'g' },
    'thin-lock-nut': { name: 'Thin Lock Nut', weight: 1.3, unit: 'g' },
    'keps-nut': { name: 'Keps Nut', weight: 1.3, unit: 'g' },
    'hex-nut': { name: 'Hex Nut', weight: 0.4, unit: 'g' },
    'piston-nut': { name: 'Piston Nut', weight: 0.9, unit: 'g' },
    'v2l-piston-nut': { name: 'V2L Piston Nut', weight: 1.6, unit: 'g' },
    'nylon-hex-nut': { name: 'Nylon Hex Nut', weight: 0.1, unit: 'g' },
    'nylon-nut': { name: 'Nylon Nut', weight: 0.3, unit: 'g' },
    
    // Screws
    'nylon-screw': { name: 'Nylon Screw', weight: 0.1, unit: 'g' },
    '1-4-screw': { name: '1/4" Screw', weight: 0.1, unit: 'g' },
    '3-8-screw': { name: '3/8" Screw', weight: 1.1, unit: 'g' },
    '1-2-screw': { name: '1/2" Screw', weight: 1.3, unit: 'g' },
    '5-8-screw': { name: '5/8" Screw', weight: 1.5, unit: 'g' },
    '3-4-screw': { name: '3/4" Screw', weight: 1.8, unit: 'g' },
    '7-8-screw': { name: '7/8" Screw', weight: 2.0, unit: 'g' },
    '1-inch-screw': { name: '1" Screw', weight: 2.3, unit: 'g' },
    '1-25-screw': { name: '1.25" Screw', weight: 2.5, unit: 'g' },
    '1-5-screw': { name: '1.5" Screw', weight: 3.0, unit: 'g' },
    '1-75-screw': { name: '1.75" Screw', weight: 3.5, unit: 'g' },
    '2-screw': { name: '2" Screw', weight: 4.0, unit: 'g' },
    '2-25-screw': { name: '2.25" Screw', weight: 4.5, unit: 'g' },
    '2-5-screw': { name: '2.5" Screw', weight: 5.0, unit: 'g' },
    
    // Standoffs
    '1-4-standoff': { name: '1/4" Standoff', weight: 0.4, unit: 'g' },
    '1-2-standoff': { name: '1/2" Standoff', weight: 0.8, unit: 'g' },
    '3-4-standoff': { name: '3/4" Standoff', weight: 1.2, unit: 'g' },
    '7-8-standoff': { name: '7/8" Standoff', weight: 1.3, unit: 'g' },
    '1-standoff': { name: '1" Standoff', weight: 1.6, unit: 'g' },
    '1-5-standoff': { name: '1.5" Standoff', weight: 2.5, unit: 'g' },
    '2-standoff': { name: '2" Standoff', weight: 3.1, unit: 'g' },
    '3-standoff': { name: '3" Standoff', weight: 4.8, unit: 'g' },
    '4-standoff': { name: '4" Standoff', weight: 6.4, unit: 'g' },
    
    // Electronics
    'brain': { name: 'V5 Brain', weight: 379, unit: 'g' },
    'battery': { name: 'V5 Battery', weight: 394, unit: 'g' },
    'radio': { name: 'V5 Radio', weight: 17, unit: 'g' },
    'v5-motor': { name: 'V5 Smart Motor', weight: 192, unit: 'g' },
    'inertial': { name: 'V5 Inertial Sensor', weight: 23, unit: 'g' },
    'distance': { name: 'V5 Distance Sensor', weight: 19, unit: 'g' },
    'optical': { name: 'V5 Optical Sensor', weight: 22, unit: 'g' },
    'gps': { name: 'V5 GPS Sensor', weight: 47, unit: 'g' },
    'rotation': { name: 'V5 Rotation Sensor', weight: 19, unit: 'g' },
    'vision': { name: 'V5 Vision Sensor', weight: 31, unit: 'g' },
    'limit-switch': { name: 'Limit Switch', weight: 8, unit: 'g' },
    'bumper-switch': { name: 'Bumper Switch', weight: 8, unit: 'g' },
    
    // Drive & Motion
    'omni-wheel': { name: '4" Omni Wheel', weight: 78, unit: 'g' },
    'mecanum-wheel': { name: '4" Mecanum Wheel', weight: 174, unit: 'g' },
    'traction-wheel': { name: '4" Traction Wheel', weight: 95, unit: 'g' },
    '2-5-wheel': { name: '2.5" Wheel', weight: 40, unit: 'g' },
    '2-75-wheel': { name: '2.75" Wheel', weight: 43, unit: 'g' },
    'mesh-gear': { name: 'Mesh Gear', weight: 5, unit: 'g', configurable: true, typeId: 'mesh-gear-type' },
    'high-strength-gear': { name: 'High Strength Gear', weight: 13, unit: 'g', configurable: true, typeId: 'hs-gear-type' },
    'sprocket': { name: 'Sprocket', weight: 9, unit: 'g', configurable: true, typeId: 'sprocket-type' },
    'bearing': { name: 'Bearing', weight: 1.3, unit: 'g' },
    'bearing-flat': { name: 'Bearing Flat', weight: 1.1, unit: 'g' },
    'spacer': { name: 'Spacer', weight: 0.6, unit: 'g' },
    'flex-wheel': { name: 'Flex Wheel', weight: 42, unit: 'g' },
    'chain-links': { name: 'Chain (per link)', weight: 1.5, unit: 'g' },
    
    // Pneumatics
    'air-reservoir': { name: 'Air Reservoir', weight: 77, unit: 'g' },
    'compressor': { name: 'Air Compressor', weight: 91, unit: 'g' },
    'double-cylinder': { name: 'Double-Acting Cylinder', weight: 28, unit: 'g' },
    'single-cylinder': { name: 'Single-Acting Cylinder', weight: 20, unit: 'g' },
    'solenoid': { name: 'Solenoid', weight: 26, unit: 'g' },
    
    // 3D Printed Parts
    'pla-count': { name: 'PLA Parts', weight: 1, unit: 'g/g', configurable: true, weightId: 'pla-weight' }
};

// Gear weights data
const gearWeights = {
    'mesh-gear': {
        '12': 5,
        '24': 9,
        '36': 14,
        '48': 21,
        '60': 30,
        '72': 37,
        '84': 46
    },
    'high-strength-gear': {
        '12': 13,
        '24': 29,
        '36': 52,
        '48': 75,
        '60': 102,
        '72': 133,
        '84': 167
    },
    'sprocket': {
        'small': 9,
        'medium': 24,
        'large': 39
    }
};

// Update weight calculation when inputs change
document.querySelectorAll('input[type="number"], input[type="checkbox"], select').forEach(input => {
    input.addEventListener('change', calculateWeight);
});

// Update gear weights when selection changes
document.getElementById('mesh-gear-type').addEventListener('change', updateGearWeight);
document.getElementById('hs-gear-type').addEventListener('change', updateGearWeight);
document.getElementById('sprocket-type').addEventListener('change', updateGearWeight);

// Reset button
document.getElementById('reset-btn').addEventListener('click', resetCalculator);

// Theme toggle
document.getElementById('theme-toggle').addEventListener('change', toggleDarkMode);

// Color theme buttons
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        setColorTheme(theme);
    });
});

// Initialize calculator
calculateWeight();

// Calculate total weight
function calculateWeight() {
    let totalWeight = 0;
    const selectedItems = [];
    
    // Loop through all components
    for (const [id, data] of Object.entries(componentsData)) {
        const countInput = document.getElementById(id);
        const count = parseInt(countInput.value) || 0;
        
        if (count > 0) {
            let itemWeight = 0;
            let itemDescription = `${data.name}`;
            
            // Handle configurable components
            if (data.configurable) {
                // Weight based on length
                if (data.lengthId) {
                    const lengthInput = document.getElementById(data.lengthId);
                    const length = parseFloat(lengthInput.value) || 0;
                    const isHalf = data.halfId ? document.getElementById(data.halfId).checked : false;
                    
                    const effectiveLength = isHalf ? length / 2 : length;
                    itemWeight = data.weight * effectiveLength;
                    
                    itemDescription += ` (${length}″${isHalf ? ' half cut' : ''})`;
                }
                // Weight based on selected type (gears, sprockets)
                else if (data.typeId) {
                    const typeSelect = document.getElementById(data.typeId);
                    const selectedType = typeSelect.value;
                    
                    itemWeight = gearWeights[id][selectedType];
                    itemDescription += ` (${typeSelect.options[typeSelect.selectedIndex].text})`;
                }
                // Weight for 3D printed parts
                else if (data.weightId) {
                    const weightInput = document.getElementById(data.weightId);
                    const partWeight = parseFloat(weightInput.value) || 0;
                    
                    itemWeight = data.weight * partWeight;
                    itemDescription += ` (${partWeight}g)`;
                }
            } else {
                // Standard components
                itemWeight = data.weight;
            }
            
            // Add to total
            const componentWeight = itemWeight * count;
            totalWeight += componentWeight;
            
            // Add to selected items list
            selectedItems.push({
                name: itemDescription,
                count: count,
                weight: componentWeight.toFixed(1)
            });
        }
    }
    
    // Update UI
    document.getElementById('total-weight').textContent = totalWeight.toFixed(1);
    
    // Update selected items list
    updateSelectedList(selectedItems);
    
    // Update weight color based on limit
    const weightElement = document.getElementById('total-weight');
    if (totalWeight > 6803.9) {
        weightElement.style.color = 'red';
    } else {
        weightElement.style.color = '';
    }
}

function updateSelectedList(items) {
    const listElement = document.getElementById('selected-list');
    listElement.innerHTML = '';
    
    // Sort items by weight (heaviest first)
    items.sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
    
    if (items.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.textContent = 'No components selected';
        listElement.appendChild(emptyItem);
        return;
    }
    
    items.forEach(item => {
        const listItem = document.createElement('li');
        const countSpan = document.createElement('span');
        countSpan.className = 'count';
        countSpan.textContent = item.count;
        
        listItem.appendChild(countSpan);
        listItem.appendChild(document.createTextNode(` ${item.name}`));
        
        const weightSpan = document.createElement('span');
        weightSpan.textContent = `${item.weight}g`;
        listItem.appendChild(weightSpan);
        
        listElement.appendChild(listItem);
    });
}

function updateGearWeight() {
    // Update mesh gear weight display
    const meshGearType = document.getElementById('mesh-gear-type').value;
    document.getElementById('mesh-gear-weight').textContent = `${gearWeights['mesh-gear'][meshGearType]}g`;
    
    // Update high strength gear weight display
    const hsGearType = document.getElementById('hs-gear-type').value;
    document.getElementById('hs-gear-weight').textContent = `${gearWeights['high-strength-gear'][hsGearType]}g`;
    
    // Update sprocket weight display
    const sprocketType = document.getElementById('sprocket-type').value;
    document.getElementById('sprocket-weight').textContent = `${gearWeights['sprocket'][sprocketType]}g`;
    
    // Recalculate total weight
    calculateWeight();
}

function resetCalculator() {
    // Reset all number inputs to 0
    document.querySelectorAll('input[type="number"]').forEach(input => {
        if (input.id.includes('length') || input.id.includes('weight')) {
            // Don't reset length or weight inputs
        } else {
            input.value = 0;
        }
    });
    
    // Reset all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.id !== 'theme-toggle') {
            checkbox.checked = false;
        }
    });
    
    // Reset all selects to first option
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
    
    // Update gear weights
    updateGearWeight();
    
    // Recalculate
    calculateWeight();
}

function toggleDarkMode() {
    const isDark = document.getElementById('theme-toggle').checked;
    document.body.setAttribute('data-theme', isDark ? 'dark' : document.body.getAttribute('data-theme').replace('dark', 'default'));
}

function setColorTheme(theme) {
    const isDark = document.getElementById('theme-toggle').checked;
    document.body.setAttribute('data-theme', isDark ? 'dark' : theme);
}
