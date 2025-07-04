# Enhanced Collage System

A powerful and flexible web-based collage creation system that supports 2-6 images with multiple layout options and responsive design.

## Features

### Supported Image Counts and Layouts

#### 2 Images
- **2×1 (Vertical)**: Two images stacked vertically
- **1×2 (Horizontal)**: Two images side by side

#### 3 Images
- **3×1 (Vertical)**: Three images stacked vertically
- **1×3 (Horizontal)**: Three images side by side
- **2×2 with 1 empty**: Grid layout with one empty space

#### 4 Images
- **2×2 (Square)**: Four images in a square grid
- **4×1 (Vertical)**: Four images stacked vertically
- **1×4 (Horizontal)**: Four images side by side

#### 5 Images
- **5×1 (Vertical)**: Five images stacked vertically
- **1×5 (Horizontal)**: Five images side by side
- **2×3 with 1 empty**: Grid layout with one empty space

#### 6 Images
- **2×3**: Two rows, three columns
- **3×2**: Three rows, two columns
- **6×1 (Vertical)**: Six images stacked vertically
- **1×6 (Horizontal)**: Six images side by side

### User Experience Features

- **Drag & Drop Upload**: Easily upload images by dragging them into the upload area
- **Image Reordering**: Drag and drop images to reorder them within the collage
- **Auto Layout Suggestions**: Automatically suggests the optimal layout based on image count
- **Real-time Preview**: See your collage update in real-time as you make changes
- **Dynamic Layout Filtering**: Filter layouts based on the number of uploaded images
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Customization Options

- **Canvas Sizes**: Choose from multiple preset canvas sizes (800×600, 1024×768, 1200×900, 1600×1200)
- **Image Spacing**: Adjust the spacing between images (0-20px)
- **Background Color**: Customize the background color of your collage
- **Corner Radius**: Add rounded corners to images (0-20px)

### Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Supports system high contrast preferences
- **Reduced Motion**: Respects user's reduced motion preferences

## Technical Implementation

### Architecture

The system is built using vanilla JavaScript with a modular class-based architecture:

- **CollageSystem Class**: Main controller handling all functionality
- **COLLAGE_LAYOUTS Configuration**: Comprehensive layout definitions
- **Event-Driven Architecture**: Responsive UI updates based on user interactions
- **Canvas API**: High-quality image rendering for download functionality

### Key Functions

#### `populateLayoutOptions(filterCount)`
Dynamically populates available layout options based on the current image count or filter selection. Includes auto-suggestion logic for optimal layouts.

#### `createCollage()`
Generates the collage preview with proper image arrangement, spacing, and styling based on the selected layout and customization options.

#### `validateImageCount(count)`
Validates that the number of images falls within the supported range (2-6 images) and provides user feedback.

#### `generateCanvasFromCollage()`
Creates a high-quality canvas representation of the collage for download functionality, preserving all customization settings.

### Layout Configuration

Each layout in the `COLLAGE_LAYOUTS` object includes:
- **Grid Definition**: Rows and columns specification
- **Cell Mapping**: Precise positioning for each image
- **Metadata**: Name, description, and optimal use cases

### Error Handling

- **File Type Validation**: Ensures only image files are accepted
- **Image Count Limits**: Prevents uploading more than 6 images
- **Layout Compatibility**: Shows appropriate layouts for current image count
- **User Feedback**: Clear error messages and success notifications

## Browser Compatibility

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile Support**: iOS Safari 12+, Chrome Mobile 60+
- **Progressive Enhancement**: Graceful degradation for older browsers

## Usage Instructions

1. **Upload Images**: Click the upload area or drag and drop 2-6 images
2. **Arrange Images**: Drag images to reorder them as desired
3. **Select Layout**: Choose from available layouts based on your image count
4. **Customize**: Adjust spacing, background color, and corner radius
5. **Create Collage**: Click "Create Collage" to generate the preview
6. **Download**: Click "Download Collage" to save your creation

## File Structure

```
collage-system/
├── index.html          # Main HTML interface
├── styles.css          # Responsive CSS styling
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## Performance Considerations

- **Efficient Image Processing**: Uses FileReader API for client-side processing
- **Optimized Rendering**: Canvas-based rendering for high-quality output
- **Memory Management**: Proper cleanup of image references
- **Responsive Images**: Adaptive sizing based on viewport

## Future Enhancements

- Additional layout patterns for each image count
- Advanced image editing tools (crop, rotate, filters)
- Social sharing functionality
- Template system for commonly used layouts
- Batch processing for multiple collages

## License

This Enhanced Collage System is part of the LeetCode repository and follows the same licensing terms.