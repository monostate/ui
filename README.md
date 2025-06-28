# @monostate/ui

A modern React component library with 89 production-ready components following a three-tier architecture. Built with TypeScript, Tailwind CSS, and Radix UI primitives.

## Features

- 🏗️ **Three-Tier Architecture** - Primitives, Composed Components, and Examples
- 🎨 **89 Components** - 45 primitives + 44 composed components
- 🚀 **Production Ready** - TypeScript strict mode, no `any` types
- 📦 **Tree Shakeable** - Only import what you need (1.2MB total)
- 🎯 **TypeScript** - Full type safety and IntelliSense support
- ♿ **Accessible** - Built on Radix UI primitives
- 🎨 **Tailwind CSS** - Utility-first styling
- 🌙 **Dark Mode** - Built-in dark mode support
- 📱 **Responsive** - Mobile-first responsive design
- 🪟 **Glass Morphism** - Built-in glass effect utilities

## Installation

```bash
npm install @monostate/ui
# or
yarn add @monostate/ui
# or
pnpm add @monostate/ui
```

## Architecture

Our component library follows a three-tier architecture:

### 1. 🏗️ Primitives (45 components)
Basic building blocks like Button, Card, Dialog. These are the foundation of your UI, built on Radix UI for accessibility.

### 2. 🎨 Composed Components (44 components)
Pre-built, prop-accepting patterns like PricingCard, VideoPlayer, KpiCard. Common UI patterns made easy with full customization.

### 3. 📚 Examples (Not in npm)
Complex templates like full dashboards and landing pages. Available in our [showcase site](https://monostate-ui.vercel.app) for copy/paste.

## Quick Start

```tsx
import { 
  // Primitives
  Button, 
  Card,
  // Composed Components  
  PricingCard, 
  VideoPlayer,
  AvatarStatus,
  KpiCard
} from '@monostate/ui'

function App() {
  return (
    <>
      {/* Primitive component */}
      <Button variant="default" size="lg">
        Click me
      </Button>

      {/* Composed component with props */}
      <PricingCard
        title="Pro Plan"
        price="$29"
        features={["Unlimited projects", "Priority support"]}
        highlighted
        onSelect={() => console.log('Selected!')}
      />

      {/* More composed components */}
      <AvatarStatus
        src="/user.jpg"
        status="online"
        size="lg"
      />

      <KpiCard
        title="Revenue"
        value="$45,231"
        icon={DollarSign}
        change={{ value: 12.5, type: "increase" }}
      />
    </>
  )
}
```

## Component Categories

### Primitives (45 Building Blocks)

#### Core UI
- **Button** - Versatile button with variants
- **Card** - Container with header/content/footer
- **Badge** - Status and label indicators
- **Avatar** - User profile images
- **Separator** - Visual divider

#### Forms
- **Input** - Text input field
- **Textarea** - Multi-line text input
- **Checkbox** - Checkbox input
- **RadioGroup** - Radio button group
- **Select** - Dropdown select
- **Switch** - Toggle switch
- **Slider** - Range slider
- **Label** - Form label
- **Form** - Form with validation

#### Overlays
- **Dialog** - Modal dialog
- **Sheet** - Slide-out panel
- **Popover** - Floating content
- **Tooltip** - Hover tooltips
- **AlertDialog** - Confirmation dialogs
- **DropdownMenu** - Dropdown menus
- **ContextMenu** - Right-click menus
- **HoverCard** - Hover card content

#### Navigation
- **Tabs** - Tab navigation
- **NavigationMenu** - Navigation bar
- **Breadcrumb** - Breadcrumb navigation
- **Pagination** - Page navigation
- **Sidebar** - Collapsible sidebar

#### Data Display
- **Table** - Data tables
- **Accordion** - Collapsible content
- **Progress** - Progress bars
- **Skeleton** - Loading placeholders
- **ScrollArea** - Scrollable containers
- **AspectRatio** - Aspect ratio container

#### Advanced
- **Command** - Command palette
- **Calendar** - Date picker
- **DateRangePicker** - Date range selection
- **Carousel** - Content carousel
- **Chart** - Chart components
- **Toast** - Toast notifications
- **Sonner** - Toast notifications
- **Alert** - Alert messages
- **Collapsible** - Collapsible content
- **Drawer** - Mobile drawer
- **InputOTP** - OTP input
- **Menubar** - Menu bar
- **Resizable** - Resizable panels
- **Toggle** - Toggle button
- **ToggleGroup** - Toggle button group

### Composed Components (44 Ready Patterns)

#### Stats & Data
```tsx
// Animated statistics
<AnimatedStats
  stats={[
    { icon: DollarSign, label: "Revenue", value: 45231, prefix: "$" },
    { icon: Users, label: "Users", value: 2350 }
  ]}
  duration={2000}
/>

// KPI card with trend
<KpiCard
  title="Monthly Revenue"
  value="$45,231"
  icon={DollarSign}
  change={{ value: 12.5, type: "increase" }}
/>

// Metric ring chart
<MetricRing
  value={75}
  max={100}
  label="Complete"
  color="#3b82f6"
/>
```

#### User & Social
```tsx
// Avatar with status
<AvatarStatus
  src="/user.jpg"
  status="online"
  size="lg"
/>

// Social share buttons
<SocialShare
  url="https://example.com"
  title="Check this out!"
  platforms={["twitter", "facebook", "linkedin"]}
/>

// Notification bell
<NotificationBell
  count={5}
  onClick={() => showNotifications()}
/>
```

#### Content & Media
```tsx
// Image carousel
<ImageCarousel
  images={[
    { src: "/img1.jpg", alt: "Slide 1" },
    { src: "/img2.jpg", alt: "Slide 2" }
  ]}
  autoPlay
  showIndicators
/>

// Video player
<VideoPlayer
  src="/video.mp4"
  poster="/thumbnail.jpg"
  autoPlay={false}
/>

// Code block
<CodeBlock
  code={`function hello() {
  console.log("Hello!");
}`}
  language="javascript"
  showLineNumbers
/>
```

#### Marketing & CTA
```tsx
// Gradient CTA
<GradientCta
  title="Ready to get started?"
  description="Join thousands of users"
  primaryButtonText="Start Free Trial"
  gradient="from-purple-600 to-pink-600"
/>

// Pricing card
<PricingCard
  title="Pro Plan"
  price="$29"
  period="/month"
  features={[
    "Unlimited projects",
    "Priority support",
    "Advanced analytics"
  ]}
  highlighted
  badge="Most Popular"
/>
```

#### Interactive Components
```tsx
// Terminal emulator
<Terminal
  prompt="$"
  commands={[
    { input: "npm install", output: "✓ Done" }
  ]}
  onCommand={(cmd) => executeCommand(cmd)}
/>

// File upload
<FileUpload
  accept="image/*"
  multiple
  maxSize={5}
  onUpload={(files) => handleFiles(files)}
/>

// Color picker
<ColorPicker
  value="#3b82f6"
  onChange={(color) => setColor(color)}
/>
```

#### Complete List of Composed Components

**Stats & Data:** AnimatedStats, KpiCard, MetricRing, GradientStat, MiniStatCard, RealtimeIndicator, RealtimeStatus

**User & Social:** AvatarStatus, SocialShare, NotificationBell, NotificationStack, MoodTracker, FeedbackEmoji

**Content & Media:** ImageCarousel, VideoPlayer, SpotifyPlayer, CodeBlock, TestimonialMini

**Marketing & CTA:** GradientCta, PricingCard, QuickActionCard, BadgeCollection

**Interactive:** Terminal, FileUpload, ColorPicker, CountdownTimer, CalendarMini, QrCode

**Layout & Design:** GlassmorphismCard, GradientBorderCard, SectionCards, WaveDivider, SkeletonCard

**Progress & Status:** ProgressSteps, JobProgress, PulseAnimation, StatusIndicator, RatingCard

**Data Management:** ComparisonTable, WeatherWidget, CryptoCard, Metric Ring

**Effects:** AnimatedGradientText, VoiceWave, FloatingAction

## Glass Morphism Effects

Apply beautiful glass morphism effects to any component using our built-in utilities:

```tsx
import { glass, Button, Card } from '@monostate/ui'

// Using the glass() utility function
<Button className={glass("medium")}>
  Glass Button
</Button>

// Different glass intensities
<Card className={glass("subtle")}>Subtle glass effect</Card>
<Card className={glass("medium")}>Medium glass effect</Card>
<Card className={glass("strong")}>Strong glass effect</Card>
<Card className={glass("ultra")}>Ultra glass effect</Card>

// Combine with other classes
<div className={glass("medium", "p-6 rounded-lg")}>
  Glass container with padding and rounded corners
</div>
```

### Glass Effect Requirements

For glass effects to be visible, ensure there's content behind the component to blur. Glass effects work best with:
- Gradient backgrounds
- Images or patterns
- Other content layers

### Glass Configuration

```tsx
import { getGlassClasses } from '@monostate/ui'

// Configure glass effects
const glassClass = getGlassClasses({
  enabled: true,
  blur: 'md',        // 'sm' | 'md' | 'lg' | 'xl'
  opacity: 0.1,      // Background opacity
  borderOpacity: 0.2,// Border opacity
  noise: true        // Enable noise texture
}, isDarkMode)
```

## Customization

Components use Tailwind CSS classes and CSS variables for easy customization:

```tsx
// Customize with className
<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Button
</Button>

// Customize with CSS variables
<style>
  :root {
    --primary: 259 94% 51%;
    --primary-foreground: 0 0% 100%;
  }
</style>
```

## Requirements

- React 18.0.0 or higher
- Tailwind CSS 3.0 or higher

## Changelog

### v0.3.0
- Export `cn` utility function for class name management
- Export `ThemeProvider` from next-themes for theme management
- Move `next-themes` to peerDependencies

### v0.2.1
- Move `react-hook-form` to peerDependencies

### v0.2.0
- Add glass morphism effects system

### v0.1.0
- Initial release with 89 production-ready components

## License

MIT © Monostate

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## Links

- [Documentation](https://monostate-ui.vercel.app)
- [GitHub](https://github.com/monostate/ui)
- [npm](https://www.npmjs.com/package/@monostate/ui)
