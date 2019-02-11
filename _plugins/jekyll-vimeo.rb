class Vimeo < Liquid::Tag
  def initialize(tagName, markup, tokens)
    super

    @id = markup
    @width = 640
    @height = 375

    if markup =~ /\s+/
      args = markup.split(' ')
      @id = args[0]
      if args[1]
        @width = args[1]
        @height = args[2]
      end
    end
  end

  def render(context)
    %Q{<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class="embed-container"><iframe src="https://player.vimeo.com/video/#{ @id }" width="#{ @width }" height="#{ @height }" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>}
  end

  Liquid::Template.register_tag("vimeo", self)
end
