// Enhanced Collage System JavaScript
class CollageSystem {
    constructor() {
        this.uploadedImages = [];
        this.selectedLayout = null;
        this.maxImages = 6;
        this.minImages = 2;
        
        // Initialize COLLAGE_LAYOUTS configuration
        this.COLLAGE_LAYOUTS = {
            2: [
                {
                    id: '2x1',
                    name: '2×1 (Vertical)',
                    description: 'Two images stacked vertically',
                    grid: { rows: 2, cols: 1 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '1x2',
                    name: '1×2 (Horizontal)',
                    description: 'Two images side by side',
                    grid: { rows: 1, cols: 2 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 }
                    ]
                }
            ],
            3: [
                {
                    id: '3x1',
                    name: '3×1 (Vertical)',
                    description: 'Three images stacked vertically',
                    grid: { rows: 3, cols: 1 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 3, col: 1, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '1x3',
                    name: '1×3 (Horizontal)',
                    description: 'Three images side by side',
                    grid: { rows: 1, cols: 3 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 3, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '2x2_3',
                    name: '2×2 with 1 empty',
                    description: 'Grid layout with one empty space',
                    grid: { rows: 2, cols: 2 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 }
                    ]
                }
            ],
            4: [
                {
                    id: '2x2',
                    name: '2×2 (Square)',
                    description: 'Four images in a square grid',
                    grid: { rows: 2, cols: 2 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 2, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '4x1',
                    name: '4×1 (Vertical)',
                    description: 'Four images stacked vertically',
                    grid: { rows: 4, cols: 1 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 3, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 4, col: 1, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '1x4',
                    name: '1×4 (Horizontal)',
                    description: 'Four images side by side',
                    grid: { rows: 1, cols: 4 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 3, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 4, rowSpan: 1, colSpan: 1 }
                    ]
                }
            ],
            5: [
                {
                    id: '5x1',
                    name: '5×1 (Vertical)',
                    description: 'Five images stacked vertically',
                    grid: { rows: 5, cols: 1 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 3, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 4, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 5, col: 1, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '1x5',
                    name: '1×5 (Horizontal)',
                    description: 'Five images side by side',
                    grid: { rows: 1, cols: 5 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 3, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 4, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 5, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '2x3_5',
                    name: '2×3 with 1 empty',
                    description: 'Grid layout with one empty space',
                    grid: { rows: 2, cols: 3 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 3, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 2, rowSpan: 1, colSpan: 1 }
                    ]
                }
            ],
            6: [
                {
                    id: '2x3',
                    name: '2×3',
                    description: 'Two rows, three columns',
                    grid: { rows: 2, cols: 3 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 3, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 3, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '3x2',
                    name: '3×2',
                    description: 'Three rows, two columns',
                    grid: { rows: 3, cols: 2 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 3, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 3, col: 2, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '6x1',
                    name: '6×1 (Vertical)',
                    description: 'Six images stacked vertically',
                    grid: { rows: 6, cols: 1 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 2, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 3, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 4, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 5, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 6, col: 1, rowSpan: 1, colSpan: 1 }
                    ]
                },
                {
                    id: '1x6',
                    name: '1×6 (Horizontal)',
                    description: 'Six images side by side',
                    grid: { rows: 1, cols: 6 },
                    cells: [
                        { row: 1, col: 1, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 2, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 3, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 4, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 5, rowSpan: 1, colSpan: 1 },
                        { row: 1, col: 6, rowSpan: 1, colSpan: 1 }
                    ]
                }
            ]
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupDragAndDrop();
        this.updateImageCount();
    }
    
    setupEventListeners() {
        // File input
        const fileInput = document.getElementById('fileInput');
        const uploadArea = document.getElementById('uploadArea');
        
        uploadArea.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        
        // Layout filter
        const imageCountFilter = document.getElementById('imageCountFilter');
        imageCountFilter.addEventListener('change', (e) => this.filterLayouts(e.target.value));
        
        // Control buttons
        document.getElementById('createCollageBtn').addEventListener('click', () => this.createCollage());
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadCollage());
        document.getElementById('demoBtn').addEventListener('click', () => this.loadDemoImages());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        
        // Options
        document.getElementById('spacing').addEventListener('input', (e) => {
            document.getElementById('spacingValue').textContent = `${e.target.value}px`;
            this.updateCollagePreview();
        });
        
        document.getElementById('borderRadius').addEventListener('input', (e) => {
            document.getElementById('borderRadiusValue').textContent = `${e.target.value}px`;
            this.updateCollagePreview();
        });
        
        document.getElementById('backgroundColor').addEventListener('change', () => this.updateCollagePreview());
        document.getElementById('canvasSize').addEventListener('change', () => this.updateCollagePreview());
    }
    
    setupDragAndDrop() {
        const uploadArea = document.getElementById('uploadArea');
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, this.preventDefaults, false);
        });
        
        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, () => uploadArea.classList.add('dragover'), false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, () => uploadArea.classList.remove('dragover'), false);
        });
        
        uploadArea.addEventListener('drop', (e) => this.handleDrop(e), false);
    }
    
    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    handleFileSelect(e) {
        const files = Array.from(e.target.files);
        this.processFiles(files);
    }
    
    handleDrop(e) {
        const dt = e.dataTransfer;
        const files = Array.from(dt.files);
        this.processFiles(files);
    }
    
    processFiles(files) {
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        
        if (this.uploadedImages.length + imageFiles.length > this.maxImages) {
            this.showError(`Maximum ${this.maxImages} images allowed`);
            return;
        }
        
        imageFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.uploadedImages.push({
                    id: Date.now() + Math.random(),
                    file: file,
                    url: e.target.result,
                    name: file.name
                });
                this.updateUI();
            };
            reader.readAsDataURL(file);
        });
    }
    
    updateUI() {
        this.renderUploadedImages();
        this.updateImageCount();
        this.updateLayoutFilter();
        this.populateLayoutOptions();
        this.updateControlButtons();
    }
    
    renderUploadedImages() {
        const container = document.getElementById('uploadedImages');
        container.innerHTML = '';
        
        this.uploadedImages.forEach((image, index) => {
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';
            imageItem.draggable = true;
            imageItem.dataset.index = index;
            
            imageItem.innerHTML = `
                <img src="${image.url}" alt="${image.name}">
                <button class="image-remove" onclick="collageSystem.removeImage(${index})">&times;</button>
            `;
            
            // Setup drag and drop for reordering
            imageItem.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', index);
                imageItem.classList.add('dragging');
            });
            
            imageItem.addEventListener('dragend', () => {
                imageItem.classList.remove('dragging');
            });
            
            imageItem.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            
            imageItem.addEventListener('drop', (e) => {
                e.preventDefault();
                const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
                const targetIndex = parseInt(imageItem.dataset.index);
                this.reorderImages(draggedIndex, targetIndex);
            });
            
            container.appendChild(imageItem);
        });
    }
    
    removeImage(index) {
        this.uploadedImages.splice(index, 1);
        this.updateUI();
        if (this.uploadedImages.length === 0) {
            this.selectedLayout = null;
            this.clearCollagePreview();
        }
    }
    
    reorderImages(fromIndex, toIndex) {
        if (fromIndex === toIndex) return;
        
        const [removed] = this.uploadedImages.splice(fromIndex, 1);
        this.uploadedImages.splice(toIndex, 0, removed);
        this.updateUI();
        this.updateCollagePreview();
    }
    
    updateImageCount() {
        const count = this.uploadedImages.length;
        const countElement = document.getElementById('imageCount');
        countElement.textContent = `${count} image${count !== 1 ? 's' : ''} uploaded`;
        
        if (count < this.minImages) {
            countElement.style.color = '#e53e3e';
        } else if (count > this.maxImages) {
            countElement.style.color = '#e53e3e';
        } else {
            countElement.style.color = '#38a169';
        }
    }
    
    updateLayoutFilter() {
        const filter = document.getElementById('imageCountFilter');
        const count = this.uploadedImages.length;
        
        if (count >= this.minImages && count <= this.maxImages) {
            filter.disabled = false;
            filter.value = count.toString();
            this.filterLayouts(count.toString());
        } else {
            filter.disabled = true;
            filter.value = '';
        }
    }
    
    filterLayouts(imageCount) {
        if (!imageCount) {
            this.populateLayoutOptions();
            return;
        }
        
        this.populateLayoutOptions(parseInt(imageCount));
    }
    
    populateLayoutOptions(filterCount = null) {
        const container = document.getElementById('layoutOptions');
        const currentImageCount = this.uploadedImages.length;
        
        console.log('PopulateLayoutOptions called with:', { filterCount, currentImageCount });
        
        if (currentImageCount < this.minImages) {
            container.innerHTML = '<p class="layout-placeholder">Upload at least 2 images to see available layouts</p>';
            return;
        }
        
        container.innerHTML = '';
        
        // Determine which layouts to show
        let layoutsToShow;
        if (filterCount) {
            layoutsToShow = this.COLLAGE_LAYOUTS[filterCount] || [];
        } else {
            // Show layouts for current image count and auto-suggest optimal layout
            layoutsToShow = this.COLLAGE_LAYOUTS[currentImageCount] || [];
            if (layoutsToShow.length > 0) {
                this.autoSelectOptimalLayout(layoutsToShow);
            }
        }
        
        console.log('Layouts to show:', layoutsToShow);
        
        if (layoutsToShow.length === 0) {
            container.innerHTML = '<p class="layout-placeholder">No layouts available for selected image count</p>';
            return;
        }
        
        try {
            layoutsToShow.forEach(layout => {
                console.log('Creating layout option for:', layout.name);
                const layoutOption = document.createElement('div');
                layoutOption.className = 'layout-option';
                layoutOption.dataset.layoutId = layout.id;
                
                if (this.selectedLayout && this.selectedLayout.id === layout.id) {
                    layoutOption.classList.add('selected');
                }
                
                const previewCells = this.createLayoutPreviewCells(layout);
                console.log('Preview cells for', layout.name, ':', previewCells);
                
                layoutOption.innerHTML = `
                    <div class="layout-preview" style="grid-template-rows: repeat(${layout.grid.rows}, 1fr); grid-template-columns: repeat(${layout.grid.cols}, 1fr);">
                        ${previewCells}
                    </div>
                    <div class="layout-name">${layout.name}</div>
                    <div class="layout-description">${layout.description}</div>
                `;
                
                layoutOption.addEventListener('click', () => this.selectLayout(layout));
                container.appendChild(layoutOption);
                console.log('Layout option added to container');
            });
        } catch (error) {
            console.error('Error creating layout options:', error);
            container.innerHTML = '<p class="layout-placeholder">Error loading layouts</p>';
        }
    }
    
    createLayoutPreviewCells(layout) {
        const totalCells = layout.grid.rows * layout.grid.cols;
        const cells = [];
        
        // Create grid cells
        for (let row = 1; row <= layout.grid.rows; row++) {
            for (let col = 1; col <= layout.grid.cols; col++) {
                const hasImage = layout.cells.some(cell => 
                    cell.row === row && cell.col === col
                );
                
                cells.push(`<div class="layout-preview-cell ${hasImage ? '' : 'empty'}"></div>`);
            }
        }
        
        return cells.join('');
    }
    
    autoSelectOptimalLayout(layouts) {
        // Auto-suggest the first layout (usually the most optimal)
        if (layouts.length > 0 && !this.selectedLayout) {
            this.selectLayout(layouts[0]);
        }
    }
    
    selectLayout(layout) {
        this.selectedLayout = layout;
        
        // Update UI
        document.querySelectorAll('.layout-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        document.querySelector(`[data-layout-id="${layout.id}"]`).classList.add('selected');
        
        this.updateCollagePreview();
        this.updateControlButtons();
    }
    
    updateCollagePreview() {
        if (!this.selectedLayout || this.uploadedImages.length === 0) {
            this.clearCollagePreview();
            return;
        }
        
        const canvas = document.getElementById('collageCanvas');
        const spacing = document.getElementById('spacing').value;
        const borderRadius = document.getElementById('borderRadius').value;
        const backgroundColor = document.getElementById('backgroundColor').value;
        
        // Set CSS variables
        canvas.style.setProperty('--spacing', `${spacing}px`);
        canvas.style.setProperty('--border-radius', `${borderRadius}px`);
        canvas.style.backgroundColor = backgroundColor;
        
        // Create collage grid
        const grid = document.createElement('div');
        grid.className = 'collage-grid';
        grid.style.gridTemplateRows = `repeat(${this.selectedLayout.grid.rows}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${this.selectedLayout.grid.cols}, 1fr)`;
        
        // Create cells
        const totalCells = this.selectedLayout.grid.rows * this.selectedLayout.grid.cols;
        const cells = [];
        
        for (let row = 1; row <= this.selectedLayout.grid.rows; row++) {
            for (let col = 1; col <= this.selectedLayout.grid.cols; col++) {
                const cellData = this.selectedLayout.cells.find(cell => 
                    cell.row === row && cell.col === col
                );
                
                const cell = document.createElement('div');
                cell.className = 'collage-cell';
                cell.style.gridRow = `${row}`;
                cell.style.gridColumn = `${col}`;
                
                if (cellData) {
                    const imageIndex = this.selectedLayout.cells.indexOf(cellData);
                    if (this.uploadedImages[imageIndex]) {
                        const img = document.createElement('img');
                        img.src = this.uploadedImages[imageIndex].url;
                        img.alt = this.uploadedImages[imageIndex].name;
                        cell.appendChild(img);
                    }
                } else {
                    cell.classList.add('empty');
                }
                
                grid.appendChild(cell);
            }
        }
        
        canvas.innerHTML = '';
        canvas.appendChild(grid);
    }
    
    clearCollagePreview() {
        const canvas = document.getElementById('collageCanvas');
        canvas.innerHTML = '<div class="canvas-placeholder"><p>Your collage will appear here</p></div>';
    }
    
    updateControlButtons() {
        const createBtn = document.getElementById('createCollageBtn');
        const downloadBtn = document.getElementById('downloadBtn');
        
        const canCreate = this.uploadedImages.length >= this.minImages && 
                         this.uploadedImages.length <= this.maxImages && 
                         this.selectedLayout;
        
        createBtn.disabled = !canCreate;
        downloadBtn.disabled = !canCreate;
    }
    
    createCollage() {
        if (!this.selectedLayout || this.uploadedImages.length === 0) {
            this.showError('Please select images and a layout first');
            return;
        }
        
        this.updateCollagePreview();
        this.showSuccess('Collage created successfully!');
    }
    
    async downloadCollage() {
        if (!this.selectedLayout || this.uploadedImages.length === 0) {
            this.showError('Please create a collage first');
            return;
        }
        
        try {
            const canvas = await this.generateCanvasFromCollage();
            const link = document.createElement('a');
            link.download = `collage-${Date.now()}.png`;
            link.href = canvas.toDataURL();
            link.click();
            
            this.showSuccess('Collage downloaded successfully!');
        } catch (error) {
            this.showError('Failed to download collage');
            console.error(error);
        }
    }
    
    async generateCanvasFromCollage() {
        const canvasSize = document.getElementById('canvasSize').value;
        const [width, height] = canvasSize.split('x').map(Number);
        const spacing = parseInt(document.getElementById('spacing').value);
        const borderRadius = parseInt(document.getElementById('borderRadius').value);
        const backgroundColor = document.getElementById('backgroundColor').value;
        
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        
        // Fill background
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
        
        // Calculate cell dimensions
        const cols = this.selectedLayout.grid.cols;
        const rows = this.selectedLayout.grid.rows;
        const cellWidth = (width - spacing * (cols + 1)) / cols;
        const cellHeight = (height - spacing * (rows + 1)) / rows;
        
        // Draw images
        for (let i = 0; i < this.selectedLayout.cells.length && i < this.uploadedImages.length; i++) {
            const cell = this.selectedLayout.cells[i];
            const image = this.uploadedImages[i];
            
            const x = spacing + (cell.col - 1) * (cellWidth + spacing);
            const y = spacing + (cell.row - 1) * (cellHeight + spacing);
            
            const img = new Image();
            await new Promise((resolve) => {
                img.onload = resolve;
                img.src = image.url;
            });
            
            // Apply border radius if specified
            if (borderRadius > 0) {
                ctx.save();
                this.roundRect(ctx, x, y, cellWidth, cellHeight, borderRadius);
                ctx.clip();
            }
            
            ctx.drawImage(img, x, y, cellWidth, cellHeight);
            
            if (borderRadius > 0) {
                ctx.restore();
            }
        }
        
        return canvas;
    }
    
    roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }
    
    loadDemoImages() {
        // Create demo images using SVG data URLs
        const demoImages = [
            {
                id: Date.now() + 1,
                file: null,
                url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRkY2QjZCIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRlbW8gSW1hZ2UgMTwvdGV4dD48L3N2Zz4=',
                name: 'demo1.svg'
            },
            {
                id: Date.now() + 2,
                file: null,
                url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNEVDREMxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRlbW8gSW1hZ2UgMjwvdGV4dD48L3N2Zz4=',
                name: 'demo2.svg'
            },
            {
                id: Date.now() + 3,
                file: null,
                url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDVCN0QxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRlbW8gSW1hZ2UgMzwvdGV4dD48L3N2Zz4=',
                name: 'demo3.svg'
            }
        ];
        
        this.uploadedImages = demoImages;
        this.updateUI();
        this.showSuccess('Demo images loaded! You can now test the layout options.');
    }

    reset() {
        this.uploadedImages = [];
        this.selectedLayout = null;
        
        // Reset UI
        document.getElementById('fileInput').value = '';
        document.getElementById('imageCountFilter').value = '';
        document.getElementById('imageCountFilter').disabled = true;
        
        this.updateUI();
        this.clearCollagePreview();
    }
    
    showError(message) {
        this.showNotification(message, 'error');
    }
    
    showSuccess(message) {
        this.showNotification(message, 'success');
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 6px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        if (type === 'error') {
            notification.style.backgroundColor = '#e53e3e';
        } else if (type === 'success') {
            notification.style.backgroundColor = '#38a169';
        } else {
            notification.style.backgroundColor = '#3182ce';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Initialize the collage system when the page loads
let collageSystem;
document.addEventListener('DOMContentLoaded', () => {
    collageSystem = new CollageSystem();
});