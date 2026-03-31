# CSS Documentation #
This project is made up of a lot of CSS as this project is very simple written in almost entirely markup lanugaes. 

## Class Structure ##
### Variables ###
- `:root` default blue theme and text sizes
- `:root.dark` dark theme and text sizes
- `:root.light` light theme and text sizes
  
### Base ###
- `*` margins
- `html, body` view size
- `body` background color

### Layout ###
#### Page Layouts ####
#### Navbar ####


### Typography ###
#### Headings #### 
- `h1` Heading 1
- `h3` Heading 3
- `h4` Heading 4 (FAQ Question)
#### Inline Text ####
- `p` Paragraph Text
- `strong` Bold Text
#### Links ####
- `a` Link (Larger Text)
    - `a:hover` Link (Hovered)
#### Lists ####
- `ul` Bulleted List
- `li` Bullet
#### Collapsable (FAQ) ####
- `summary` Toggle Header
- `details` Collapsable Content
    - `detaols, h4`
    - `details[open], h4` _Animate_
    - `details[open], summary:before` _Animate_
