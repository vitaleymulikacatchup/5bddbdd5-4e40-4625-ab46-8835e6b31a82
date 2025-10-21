import type { Metadata } from "next";
import {
  Inter_Tight,
  Playfair_Display,
  Roboto,
  Open_Sans,
  Lato,
  Montserrat,
  Poppins,
  Raleway,
  Ubuntu,
  Nunito
} from "next/font/google";
import "./globals.css";
import { PostHogWrapper } from "@/components/PostHogWrapper";
import AuroraBackground from "@/components/background/AuroraBackground";
import Tag from "@/tag/Tag";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Golden Crust Bakery - Fresh Artisan Baked Goods Daily",
  description: "Family-owned bakery since 1952 serving fresh bread, pastries, and custom cakes. Experience traditional baking with premium ingredients.",
  keywords: "bakery, fresh bread, pastries, artisan baking, custom cakes, sourdough, croissants",
  metadataBase: new URL("https://goldencrust-bakery.com"),
  alternates: {
    canonical: "https://goldencrust-bakery.com"
  },
  openGraph: {
    title: "Golden Crust Bakery - Fresh Artisan Baked Goods Daily",
    description: "Family-owned bakery since 1952 serving fresh bread, pastries, and custom cakes. Experience traditional baking with premium ingredients.",
    siteName: "Golden Crust Bakery",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/13308388/pexels-photo-13308388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        alt: "Golden Crust bakery display with fresh baked goods"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Crust Bakery - Fresh Artisan Baked Goods Daily",
    description: "Family-owned bakery since 1952 serving fresh bread, pastries, and custom cakes.",
    images: ["https://images.pexels.com/photos/13308388/pexels-photo-13308388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogWrapper>
        <body
          className={`${interTight.variable} ${playfairDisplay.variable} ${roboto.variable} ${openSans.variable} ${lato.variable} ${montserrat.variable} ${poppins.variable} ${raleway.variable} ${ubuntu.variable} ${nunito.variable} antialiased`}
        >
          <AuroraBackground />
          <Tag />
          {children}
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  if (window.self === window.top) return;

  if (window.__webildEditorInitialized) return;
  window.__webildEditorInitialized = true;

  let isActive = false;
  let hoveredElement = null;
  let selectedElement = null;
  let originalContent = null;
  let isEditing = false;
  let elementTypeLabel = null;
  let selectedCategoryLabel = null;
  let hoverOverlay = null;
  let scrollTimeout = null;
  let isScrolling = false;

  const textElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'li', 'label', 'div'];
  const buttonElements = ['button', 'a', 'div', 'span'];
  const invalidElements = ['html', 'body', 'script', 'style', 'meta', 'link', 'head', 'noscript', 'title'];
  const hoverClass = 'webild-hover';
  const selectedClass = 'webild-selected';

  const style = document.createElement('style');
  style.id = 'webild-inspector-styles';
  style.textContent = \`
    .webild-hover {
      outline: 2px dashed rgba(59, 130, 246, 0.7) !important;
      outline-offset: 2px !important;
      cursor: pointer !important;
      transition: outline 0.15s ease !important;
    }
    .webild-selected {
      outline: 2px solid rgba(59, 130, 246, 1) !important;
      outline-offset: 2px !important;
      transition: outline 0.15s ease !important;
    }
    [contenteditable="true"].webild-selected {
      outline: 2px solid rgba(59, 130, 246, 1) !important;
      background-color: rgba(59, 130, 246, 0.05) !important;
    }
    .webild-element-type-label {
      position: fixed;
      z-index: 999999;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.95));
      color: white;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      letter-spacing: 0.3px;
    }
    .webild-selected-category-label {
      position: fixed;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999998;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.95));
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 700;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .webild-hover-overlay {
      position: fixed !important;
      background-color: rgba(59, 130, 246, 0.15) !important;
      border-radius: 4px !important;
      pointer-events: none !important;
      z-index: 999998 !important;
      transition: all 0.15s ease !important;
    }
  \`;
  document.head.appendChild(style);
  
  const getUniqueSelector = (element) => {
    const uniqueId = 'webild-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    element.setAttribute('data-webild-id', uniqueId);
    return \`[data-webild-id="\${uniqueId}"]\`;
  };
  
  const getSectionId = (element) => {
    let current = element;
    while (current && current !== document.body) {
      const sectionId = current.getAttribute('data-section');
      if (sectionId) {
        return sectionId;
      }
      current = current.parentElement;
    }
    return 'hero';
  };
  
  const getElementType = (element) => {
    const tagName = element.tagName.toLowerCase();
    const computedStyle = window.getComputedStyle(element);

    const sectionId = element.getAttribute('data-section');
    if (sectionId) {
      return sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    }

    if (tagName === 'img') return 'Image';

    const backgroundImage = computedStyle.backgroundImage;
    if (backgroundImage && backgroundImage !== 'none') {
      const urlMatch = backgroundImage.match(/url\(['"]?([^'")]+)['"]?\)/);
      if (urlMatch) {
        return 'Image';
      }
    }

    if (tagName === 'button') {
      return 'Button';
    }

    if (tagName === 'a' && element.getAttribute('href')) {
      return 'Button';
    }

    if (element.getAttribute('role') === 'button') {
      return 'Button';
    }

    const buttonClasses = ['btn', 'button', 'cta', 'action-button'];
    const hasButtonClass = buttonClasses.some(cls =>
      element.classList.contains(cls) || element.classList.contains(\`btn-\${cls}\`)
    );

    if (hasButtonClass && element.textContent && element.textContent.trim().length > 0) {
      return 'Button';
    }

    const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'li'];
    if (textTags.includes(tagName)) {
      return 'Text';
    }

    if (tagName === 'div' && element.children.length === 0 && element.textContent && element.textContent.trim()) {
      return 'Text';
    }

    if (tagName === 'a' && !element.getAttribute('href')) {
      return 'Text';
    }

    return 'Section';
  };
  
  const getElementInfo = (element) => {
    const rect = element.getBoundingClientRect();
    const tagName = element.tagName.toLowerCase();
    const selector = getUniqueSelector(element);
    const sectionId = getSectionId(element);
    
    let className = undefined;
    try {
      if (element.className) {
        if (typeof element.className === 'string') {
          className = element.className;
        } else if (element.className.baseVal !== undefined) {
          className = element.className.baseVal;
        }
      }
    } catch (e) {}
    
    const info = {
      tagName: tagName,
      id: element.id || undefined,
      className: className,
      selector: selector,
      elementType: null,
      sectionId: sectionId,
      boundingBox: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      }
    };
    
    if (tagName === 'img') {
      info.imageData = {
        src: element.src,
        alt: element.alt || undefined,
        naturalWidth: element.naturalWidth,
        naturalHeight: element.naturalHeight,
        isBackground: false
      };
    }
    
    const computedStyle = window.getComputedStyle(element);
    const backgroundImage = computedStyle.backgroundImage;
    if (backgroundImage && backgroundImage !== 'none') {
      const urlMatch = backgroundImage.match(/url\(['"]?([^'")]+)['"]?\)/);
      if (urlMatch) {
        if (tagName !== 'img') {
          info.imageData = {
            src: urlMatch[1],
            isBackground: true
          };
        } else {
          if (!info.imageData) info.imageData = {};
          info.imageData.backgroundImageSrc = urlMatch[1];
        }
      }
    }
    
    const elementType = getElementType(element);
    info.elementType = elementType;
    
    if (elementType === 'Button') {
      const buttonText = element.textContent?.trim() || element.value || element.getAttribute('aria-label') || '';
      const buttonHref = element.getAttribute('href') ||
                        element.getAttribute('data-href') ||
                        element.getAttribute('onclick') ||
                        element.dataset?.link ||
                        undefined;

      info.buttonData = {
        text: buttonText,
        href: buttonHref
      };
    }

    if (elementType === 'Text') {
      info.textContent = element.textContent || '';
    }
    
    return info;
  };
  
  const isValidElement = (element) => {
    if (!isActive) return false;
    const tagName = element.tagName?.toLowerCase();
    return !invalidElements.includes(tagName);
  };

  const getMostSpecificElement = (x, y) => {
    const elements = document.elementsFromPoint(x, y);

    const validElements = elements.filter(el =>
      isValidElement(el) &&
      !el.classList.contains('webild-hover-overlay') &&
      !el.classList.contains('webild-element-type-label') &&
      !el.classList.contains('webild-selected-category-label')
    );

    if (validElements.length === 0) return null;

    for (const element of validElements) {
      const hasDirectContent = element.textContent && element.textContent.trim();
      const hasImages = element.tagName === 'IMG' || element.querySelector('img');
      const isInteractive = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName);

      if (isInteractive || hasImages || (hasDirectContent && element.children.length <= 2)) {
        return element;
      }
    }

    return validElements[0];
  };

  const isTextElement = (element) => {
    const elementType = getElementType(element);
    return elementType === 'Text';
  };

  const isButtonElement = (element) => {
    const elementType = getElementType(element);
    return elementType === 'Button';
  };
  
  const makeEditable = (element, clickEvent) => {
    if (!isTextElement(element)) return;
    
    originalContent = element.textContent;
    element.contentEditable = 'true';
    element.focus();
    isEditing = true;
    
    window.parent.postMessage({
      type: 'webild-text-editing-started',
      data: { selector: getElementInfo(element).selector }
    }, '*');
    
    const handleInput = () => {
      if (element.textContent !== originalContent) {
        window.parent.postMessage({
          type: 'webild-text-changed',
          data: { 
            selector: getElementInfo(element).selector,
            hasChanges: true
          }
        }, '*');
      }
    };
    
    element.addEventListener('input', handleInput);
    element.dataset.inputHandler = 'true';
    
    if (clickEvent && element.childNodes.length > 0) {
      const range = document.caretRangeFromPoint(clickEvent.clientX, clickEvent.clientY);
      if (range) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };
  
  const makeUneditable = (element, save = false) => {
    if (!element || element.contentEditable !== 'true') return;
    
    element.contentEditable = 'false';
    isEditing = false;
    
    if (element.dataset.inputHandler === 'true') {
      element.removeEventListener('input', () => {});
      delete element.dataset.inputHandler;
    }
    
    window.parent.postMessage({
      type: 'webild-text-editing-ended',
      data: { selector: getElementInfo(element).selector }
    }, '*');
    
    if (save && originalContent !== element.textContent) {
      const elementInfo = getElementInfo(element);
      const change = {
        type: 'updateText',
        selector: elementInfo.selector,
        oldValue: originalContent,
        newValue: element.textContent,
        elementType: elementInfo.elementType,
        sectionId: elementInfo.sectionId,
        timestamp: Date.now()
      };

      saveChangeToStorage(change);

      window.parent.postMessage({
        type: 'webild-element-changed',
        data: change
      }, '*');
    } else if (!save && originalContent !== null) {
      element.textContent = originalContent;
    }
    
    originalContent = null;
  };
  
  const createHoverOverlay = (element) => {
    const rect = element.getBoundingClientRect();
    const overlay = document.createElement('div');
    overlay.className = 'webild-hover-overlay';
    overlay.style.cssText = \`
      position: fixed !important;
      top: \${rect.top - 2}px !important;
      left: \${rect.left - 2}px !important;
      width: \${rect.width + 4}px !important;
      height: \${rect.height + 4}px !important;
      background-color: rgba(90, 113, 230, 0.15) !important;
      border-radius: 4px !important;
      pointer-events: none !important;
      z-index: 999998 !important;
      transition: all 0.15s ease !important;
    \`;
    document.body.appendChild(overlay);
    return overlay;
  };
  
  const removeHoverOverlay = () => {
    if (hoverOverlay) {
      hoverOverlay.remove();
      hoverOverlay = null;
    }
  };
  
  const showElementTypeLabel = (element, elementType) => {
    if (!elementType) return;
    
    removeElementTypeLabel();
    
    const rect = element.getBoundingClientRect();
    elementTypeLabel = document.createElement('div');
    elementTypeLabel.className = 'webild-element-type-label';
    elementTypeLabel.textContent = elementType;
    elementTypeLabel.style.cssText = \`
      left: \${rect.left}px;
      top: \${rect.top - 32}px;
    \`;
    
    if (rect.top < 40) {
      elementTypeLabel.style.top = \`\${rect.bottom + 4}px\`;
    }
    
    document.body.appendChild(elementTypeLabel);
  };
  
  const removeElementTypeLabel = () => {
    if (elementTypeLabel) {
      elementTypeLabel.remove();
      elementTypeLabel = null;
    }
  };
  
  const showSelectedCategoryLabel = (elementType) => {
    removeSelectedCategoryLabel();
    if (!elementType) return;
    
    selectedCategoryLabel = document.createElement('div');
    selectedCategoryLabel.className = 'webild-selected-category-label';
    selectedCategoryLabel.textContent = \`Editing: \${elementType}\`;
    document.body.appendChild(selectedCategoryLabel);
  };
  
  const removeSelectedCategoryLabel = () => {
    if (selectedCategoryLabel) {
      selectedCategoryLabel.remove();
      selectedCategoryLabel = null;
    }
  };
  
  const handleMouseOver = (e) => {
    if (!isActive) return;

    const target = getMostSpecificElement(e.clientX, e.clientY) || e.target;

    if (!isValidElement(target) || target === hoveredElement || target === selectedElement) {
      return;
    }
    
    if (hoveredElement && hoveredElement !== selectedElement) {
      hoveredElement.classList.remove(hoverClass);
      if (hoveredElement.dataset.webildOriginalPosition) {
        hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
        delete hoveredElement.dataset.webildOriginalPosition;
      }
      removeHoverOverlay();
      removeElementTypeLabel();
    }
    
    hoveredElement = target;
    
    const computedStyle = window.getComputedStyle(target);
    const currentPosition = computedStyle.position;
    
    if (currentPosition === 'static' || currentPosition === '') {
      hoveredElement.dataset.webildOriginalPosition = currentPosition || 'none';
      hoveredElement.style.position = 'relative';
    }
    
    hoveredElement.classList.add(hoverClass);
    
    if ((!selectedElement || selectedElement !== target) && !isScrolling) {
      hoverOverlay = createHoverOverlay(target);
    }
    
    const elementType = getElementType(target);
    showElementTypeLabel(target, elementType);
    
    window.parent.postMessage({
      type: 'webild-element-hover',
      data: getElementInfo(target)
    }, '*');
  };
  
  const handleMouseOut = (e) => {
    if (!isActive) return;
    
    if (hoveredElement && hoveredElement !== selectedElement) {
      hoveredElement.classList.remove(hoverClass);
      
      if (hoveredElement.dataset.webildOriginalPosition) {
        hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
        delete hoveredElement.dataset.webildOriginalPosition;
      }
      
      removeHoverOverlay();
      removeElementTypeLabel();
      
      hoveredElement = null;
      
      window.parent.postMessage({
        type: 'webild-element-hover',
        data: null
      }, '*');
    }
  };
  
  const handleClick = (e) => {
    if (!isActive) return;

    if (isEditing) {
      e.stopPropagation();
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const target = getMostSpecificElement(e.clientX, e.clientY) || e.target;
    if (!isValidElement(target)) return;
    
    if (selectedElement && selectedElement !== target) {
      makeUneditable(selectedElement, false);
      selectedElement.classList.remove(selectedClass);
      selectedElement.classList.remove(hoverClass);
      
      if (selectedElement.dataset.webildOriginalPosition) {
        selectedElement.style.position = selectedElement.dataset.webildOriginalPosition === 'none' ? '' : selectedElement.dataset.webildOriginalPosition;
        delete selectedElement.dataset.webildOriginalPosition;
      }
      
      removeHoverOverlay();
      removeSelectedCategoryLabel();
    }
    
    if (selectedElement === target) {
      if (target.dataset.webildOriginalPosition) {
        target.style.position = target.dataset.webildOriginalPosition === 'none' ? '' : target.dataset.webildOriginalPosition;
        delete target.dataset.webildOriginalPosition;
      }
      
      removeHoverOverlay();
      removeSelectedCategoryLabel();
      
      selectedElement = null;
      window.parent.postMessage({
        type: 'webild-element-selected',
        data: null
      }, '*');
      return;
    }
    
    selectedElement = target;
    selectedElement.classList.add(selectedClass);
    
    removeHoverOverlay();
    removeElementTypeLabel();
    
    if (hoveredElement === target) {
      hoveredElement.classList.remove(hoverClass);
      hoveredElement = null;
    }
    
    const elementInfo = getElementInfo(target);
    showSelectedCategoryLabel(elementInfo.elementType);
    
    window.parent.postMessage({
      type: 'webild-element-selected',
      data: elementInfo
    }, '*');
    
    if (isTextElement(target)) {
      setTimeout(() => makeEditable(target, e), 50);
    }
  };
  
  const handleKeyDown = (e) => {
    if (!isActive) return;
    if (!isEditing || !selectedElement) return;
    
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      makeUneditable(selectedElement, true);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      makeUneditable(selectedElement, false);
    }
  };
  
  const handleBlur = (e) => {
    if (!isActive) return;
    if (isEditing && selectedElement && e.target === selectedElement) {
      makeUneditable(selectedElement, true);
    }
  };
  
  const handleScroll = () => {
    if (!isActive) return;
    
    removeHoverOverlay();
    isScrolling = true;
    
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      if (hoveredElement && (!selectedElement || selectedElement !== hoveredElement)) {
        hoverOverlay = createHoverOverlay(hoveredElement);
      }
    }, 150);
    
    window.parent.postMessage({
      type: 'webild-iframe-scroll'
    }, '*');
  };
  
  const getStorageKey = () => {
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split('/').filter(Boolean);
    return \`webild-changes-\${pathParts.join('-')}\`;
  };

  const saveChangeToStorage = (change) => {
    try {
      const storageKey = getStorageKey();
      const existingChanges = JSON.parse(localStorage.getItem(storageKey) || '[]');

      const filteredChanges = existingChanges.filter(c => c.selector !== change.selector);
      filteredChanges.push(change);

      localStorage.setItem(storageKey, JSON.stringify(filteredChanges));

      window.parent.postMessage({
        type: 'webild-change-saved-locally',
        data: { change, allChanges: filteredChanges }
      }, '*');
    } catch (error) {
      console.error('Failed to save change to localStorage:', error);
    }
  };

  const clearLocalChanges = () => {
    try {
      const storageKey = getStorageKey();
      localStorage.removeItem(storageKey);
      window.parent.postMessage({
        type: 'webild-local-changes-cleared',
        data: {}
      }, '*');
    } catch (error) {
      console.error('Failed to clear local changes:', error);
    }
  };

  const handleMessage = (e) => {
    if (!e.data || !e.data.type) return;

    if (e.data.type === 'webild-activate-editor') {
      if (!isActive) {
        isActive = true;
        window.parent.postMessage({ type: 'webild-editor-activated' }, '*');
      }
      return;
    }

    if (e.data.type === 'webild-deactivate-editor') {
      if (isActive) {
        isActive = false;

        if (selectedElement) {
          makeUneditable(selectedElement, false);
          selectedElement.classList.remove(selectedClass);
          selectedElement = null;
        }
        if (hoveredElement) {
          hoveredElement.classList.remove(hoverClass);
          hoveredElement = null;
        }

        removeHoverOverlay();
        removeElementTypeLabel();
        removeSelectedCategoryLabel();
        window.parent.postMessage({ type: 'webild-editor-deactivated' }, '*');
      }
      return;
    }

    if (e.data.type === 'webild-clear-local-changes') {
      clearLocalChanges();
      return;
    }

    if (!isActive) return;
    
    if (e.data.type === 'webild-update-text') {
      const { selector, newValue } = e.data.data;
      try {
        const element = document.querySelector(selector);
        if (element && isTextElement(element)) {
          element.textContent = newValue;
        }
      } catch (error) {
        console.error('[Webild] Invalid selector for text update:', selector, error);
      }
      return;
    }

    if (e.data.type === 'webild-update-button') {
      const { selector, text, href } = e.data.data;
      try {
        const element = document.querySelector(selector);
        if (element && isButtonElement(element)) {
          if (text !== undefined) {
            element.textContent = text;
          }
          if (href !== undefined) {
            if (element.tagName.toLowerCase() === 'a') {
              element.href = href;
            } else {
              element.setAttribute('data-href', href);
            }
          }
        }
      } catch (error) {
        console.error('[Webild] Invalid selector for button update:', selector, error);
      }
      return;
    }

    if (e.data.type === 'webild-replace-image') {
      const { selector, newSrc, isBackground } = e.data.data;
      let element = null;

      try {
        element = document.querySelector(selector);
      } catch (error) {
        console.error('[Webild] Invalid selector for image replacement:', selector, error);
        window.parent.postMessage({
          type: 'webild-image-replacement-error',
          data: { selector, message: 'Invalid selector: ' + error.message, success: false }
        }, '*');
        return;
      }

      if (!element) {
        window.parent.postMessage({
          type: 'webild-image-replacement-error',
          data: { selector, message: 'Element not found', success: false }
        }, '*');
        return;
      }

      try {
        let replaced = false;
        let oldValue = '';

        if (isBackground) {
          oldValue = window.getComputedStyle(element).backgroundImage;
          element.style.backgroundImage = \`url('\${newSrc}')\`;
          replaced = true;
        } else if (element.tagName.toLowerCase() === 'img') {
          oldValue = element.src;
          element.src = newSrc;
          replaced = true;
        } else {
          const hasBackgroundImage = window.getComputedStyle(element).backgroundImage !== 'none';
          if (hasBackgroundImage) {
            oldValue = window.getComputedStyle(element).backgroundImage;
            element.style.backgroundImage = \`url('\${newSrc}')\`;
            replaced = true;
          }
        }

        if (replaced) {
          const elementInfo = getElementInfo(element);

          let cleanOldValue = oldValue;
          if (oldValue.includes('url(')) {
            const urlMatch = oldValue.match(/url\(['"]?([^'")]+)['"]?\)/);
            if (urlMatch) {
              cleanOldValue = urlMatch[1];
            }
          }

          const change = {
            type: 'replaceImage',
            selector: selector,
            oldValue: cleanOldValue,
            newValue: newSrc,
            elementType: elementInfo.elementType,
            sectionId: elementInfo.sectionId,
            timestamp: Date.now()
          };

          saveChangeToStorage(change);

          window.parent.postMessage({
            type: 'webild-element-changed',
            data: change
          }, '*');

          window.parent.postMessage({
            type: 'webild-image-replaced',
            data: { selector, newSrc, success: true }
          }, '*');
        } else {
          window.parent.postMessage({
            type: 'webild-image-replacement-error',
            data: { selector, message: 'Could not determine how to replace image', success: false }
          }, '*');
        }
      } catch (error) {
        window.parent.postMessage({
          type: 'webild-image-replacement-error',
          data: { selector, message: error.message || 'Failed to replace image', success: false }
        }, '*');
      }
    }
  };
  
  document.addEventListener('mouseover', handleMouseOver, true);
  document.addEventListener('mouseout', handleMouseOut, true);
  document.addEventListener('click', handleClick, true);
  document.addEventListener('keydown', handleKeyDown, true);
  document.addEventListener('blur', handleBlur, true);
  window.addEventListener('scroll', handleScroll, true);
  window.addEventListener('message', handleMessage, true);
  
  window.webildCleanup = () => {
    isActive = false;
    
    if (selectedElement) {
      makeUneditable(selectedElement, false);
    }
    
    removeHoverOverlay();
    removeElementTypeLabel();
    removeSelectedCategoryLabel();
    
    document.removeEventListener('mouseover', handleMouseOver, true);
    document.removeEventListener('mouseout', handleMouseOut, true);
    document.removeEventListener('click', handleClick, true);
    document.removeEventListener('keydown', handleKeyDown, true);
    document.removeEventListener('blur', handleBlur, true);
    window.removeEventListener('scroll', handleScroll, true);
    window.removeEventListener('message', handleMessage, true);
    
    document.querySelectorAll('.' + hoverClass).forEach(el => {
      el.classList.remove(hoverClass);
    });
    document.querySelectorAll('.' + selectedClass).forEach(el => {
      el.classList.remove(selectedClass);
    });
    
    const styleEl = document.getElementById('webild-inspector-styles');
    if (styleEl) styleEl.remove();
    
    hoveredElement = null;
    selectedElement = null;
  };
  
  window.parent.postMessage({ type: 'webild-editor-ready' }, '*');
})();
`
          }}
        />
      </body>
      </PostHogWrapper>
    </html>
  );
}